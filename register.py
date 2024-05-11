from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


registered_users = {}

@app.route('/')
def index():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']

    if username in registered_users:
        return "Username already exists. Please choose a different one."
    else:
        registered_users[username] = password
        return redirect(url_for('login'))

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login_process', methods=['POST'])
def login_process():
    username = request.form['username']
    password = request.form['password']

    if username in registered_users and registered_users[username] == password:
        return f"Welcome, {username}!"
    else:
        return "Invalid username or password. Please try again."

if __name__ == '__main__':
    app.run(debug=True)
