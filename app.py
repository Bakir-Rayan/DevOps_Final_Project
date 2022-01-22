import os
from flask import Flask, request, render_template

app = Flask(__name__)
app.debug = False
host = '127.0.0.1'
port = int(os.environ.get('PORT', 7777))


@app.route('/film', methods =["GET", "POST"])
def gfg():
   if request.method == "POST":
      film_name = request.form.get("fname")
      return "the film name "+film_name
   else:
      return render_template('film.html')


  
if __name__=='__main__':
   app.run(host=host, port=port)