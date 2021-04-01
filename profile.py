import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    
    return render_template("index.html")


@app.route('/profile', methods=['POST'])
def profile():
    """Return results from profile form."""
# TODO: get the values from the rest of the formgit
    # Add them to jsonify

    fullname = request.form.get['name'] #get that form from website post request
    age = request.form.get['age'] #give me the age
    occupation = request.form.get['occupation'] #give me occupation
    
    # turn this file into a string, if is its fine just use it
    return jsonify({'fullname': fullname, 'age': age, 'occupation': occupation})





if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
