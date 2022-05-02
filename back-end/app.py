import os
import json
from flask import Flask, request, render_template

app = Flask(__name__)
app.debug = False
host = '127.0.0.1'
port = int(os.environ.get('PORT', 5000))

# get all books
@app.route('/api/book', methods =["GET"])
def get_all_books():
   pass
   #return jsonify()

# get specific book by name
@app.route('/api/book/<str:book_name>', methods =["GET"])
def get_book_by_name(book_name):
   pass
   #return jsonify()

# get specific book by id
@app.route('/api/book/<str:book_id>', methods =["GET"])
def get_book_by_id(book_id):
   pass
   #return jsonify()

# create new book
@app.route('/api/book', methods =["POST"])
def create_book():
   pass
   #return jsonify()

# remove book by id
@app.route('/api/book/<int:book_id>', methods =["DELETE"])
def delete_book_by_id(book_id):
   pass
   #return jsonify()

# remove book by name
@app.route('/api/book/<str:book_name>', methods =["DELETE"])
def delete_book_by_name(book_name):
   pass
   #return jsonify()

# update book
@app.route('/api/book/<int:book_id>', methods =["PUT"])
def update_book(book_id):
   pass
   #return jsonify()


# get specific author
@app.route('/api/author/<int:author_id>', methods =["GET"])
def get_author(author_id):
   pass
   #return jsonify()

# get all books by fields
@app.route('/api/book/<str:field>', methods =["GET"])
def get_books_by_field(field):
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
   pass
   #return jsonify()

# get book by pages greater than or less than
@app.route('/api/book/<int:pages>', methods =["GET"])
def get_books_by_pages(pages):
   pass
   #return jsonify()
  
if __name__=='__main__':
   app.run(host=host, port=port)