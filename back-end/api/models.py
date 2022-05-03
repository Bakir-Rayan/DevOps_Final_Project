from . import db 

class Book(db.Model):
    book_id = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Author = db.Column(db.String)
    Publisher = db.Column(db.String)
    Description = db.Column(db.String)
    Book_Field_id = db.Column(db.Integer)