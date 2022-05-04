from flask import Blueprint, jsonify, request
from . import db 
from .models import Book

main = Blueprint('main', __name__)

# get the real name of the book field
def get_book_field_name(field):
    fields = {"comic":1,
        "computer_science":2,
        "data_science":3,
        "economics":4,
        "fiction":5,
        "history":6,
        "mathematics":7,
        "nonfiction":8,
        "philosophy":9,
        "psychology":10,
        "science":11,
        "signal_processing":12}
    return list(fields.keys())[list(fields.values()).index(field)]

# get the id of the book field
def get_book_field_id(field):
    fields = {"comic":1,
        "computer_science":2,
        "data_science":3,
        "economics":4,
        "fiction":5,
        "history":6,
        "mathematics":7,
        "nonfiction":8,
        "philosophy":9,
        "psychology":10,
        "science":11,
        "signal_processing":12}
    return fields[field]

# get all books
@main.route('/api/books/', methods=['GET'])
def get_all_books():
    books_list = Book.query.all()
    books = []

    for book in books_list:
        books.append({'id': book.book_id, 'title': book.Title, 
                    'author': book.Author, 'publisher': book.Publisher, 
                    'description': book.Description, 'book_field_id': get_book_field_name(book.Book_Field_id)})

    return jsonify({'Book' : books})

# get book by name
@main.route('/api/books/fullname/', methods=['GET'])
def get_book_by_name():
    book_name = request.args.get('book_name')
    book = Book.query.filter_by(Title=book_name).first()
    if book:
        return jsonify({'Book' : {'id': book.book_id, 'title': book.Title, 
                    'author': book.Author, 'publisher': book.Publisher, 
                    'description': book.Description, 'book_field_id': get_book_field_name(book.Book_Field_id)}})
    else:
        return jsonify({'message' : 'No book found!'})

# get book by field
@main.route('/api/books/field/', methods=['GET'])
def get_book_by_field():
    book_field_id = request.args.get('book_field_id')
    field_id = get_book_field_id(book_field_id)
    books_list = Book.query.filter_by(Book_Field_id=field_id).all()
    books = []

    for book in books_list:
        books.append({'id': book.book_id, 'title': book.Title, 
                    'author': book.Author, 'publisher': book.Publisher, 
                    'description': book.Description, 'book_field_id': get_book_field_name(book.Book_Field_id)})

    return jsonify({'Book' : books})

# get book by part of name
@main.route('/api/books/partial/', methods=['GET'])
def get_book_by_partial_name():
    book_name = request.args.get('book_name')
    books_list = Book.query.filter(Book.Title.like('%'+book_name+'%')).all()
    books = []

    for book in books_list:
        books.append({'id': book.book_id, 'title': book.Title, 
                    'author': book.Author, 'publisher': book.Publisher, 
                    'description': book.Description, 'book_field_id': get_book_field_name(book.Book_Field_id)})

    return jsonify({'Book' : books})

# add book
@main.route('/api/books/add/', methods=['POST'])
def add_book():
    data = request.get_json()
    field = get_book_field_id(data['book_field_id'])
    book = Book(Title=data['title'], Author=data['author'], Publisher=data['publisher'], Description=data['description'], Book_Field_id=field)
    db.session.add(book)
    db.session.commit()
    return jsonify({'message' : 'Book added!'})

# delete book
@main.route('/api/books/delete/', methods=['DELETE'])
def delete_book():
    book_id = request.args.get('book_id')
    book = Book.query.filter_by(book_id=book_id).first()
    if book:
        db.session.delete(book)
        db.session.commit()
        return jsonify({'message' : 'Book deleted!'})
    else:
        return jsonify({'message' : 'No book found!'})

# update book
@main.route('/api/books/update/', methods=['PUT'])
def update_book():
    data = request.get_json()
    book_id = data['book_id']
    book = Book.query.filter_by(book_id=book_id).first()
    if book:
        book.Title = data['title']
        book.Author = data['author']
        book.Publisher = data['publisher']
        book.Description = data['description']
        book.Book_Field_id = get_book_field_id(data['book_field_id'])
        db.session.commit()
        return jsonify({'message' : 'Book updated!'})
    else:
        return jsonify({'message' : 'No book found!'})