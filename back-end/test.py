# to do connect to the database
import sqlite3 as sql
import os
from flask import jsonify, Flask

app = Flask(__name__)
app.debug = False



@app.route('/')
def home():
    con = sql.connect("../database/database.db")
    cur = con.cursor()
    rows = cur.execute("select * from Book where Book_Field_id = 12")
    result=[]
    for row in rows:
        result.append([row[0],row[1],row[2],row[3],row[4],row[5]])
    
    return jsonify(result)




if __name__ == "__main__":
    app.run(debug=False)