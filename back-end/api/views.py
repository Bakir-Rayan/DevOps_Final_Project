from flask import Blueprint, jsonify, request
from . import db 
from .models import Book

main = Blueprint('main', __name__)


@main.route('/api/books')
def get_all_books():
    books_list = Book.query.all()
    books = []

    for book in books_list:
        books.append({'id': book.book_id, 'title': book.Title, 
                    'author': book.Author, 'publisher': book.Publisher, 
                    'description': book.Description, 'book_field_id': book.Book_Field_id})

    return jsonify({'Book' : books})