from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/aksesuari.html')  
def aksesuari_page():
    return render_template('aksesuari.html')

@app.route('/spoles.html')  
def spoles_page():
    return render_template('spoles.html')

@app.route('/makskeres.html')  
def makskeres_page():
    return render_template('makskeres.html')

@app.route('/product1_homepage.html')
def product1_page():
    return render_template('product1_homepage.html')

@app.route('/product2_homepage.html')
def product2_page():
    return render_template('product2_homepage.html')

@app.route('/product3_homepage.html')
def product3_page():
    return render_template('product3_homepage.html')

@app.route('/product4_homepage.html')
def product4_page():
    return render_template('product4_homepage.html')

@app.route('/cart.html')
def cart_page():
    return render_template('cart.html')

@app.route('/login.html')
def login_page():
    return render_template('login.html')

@app.route('/register.html')
def register_page():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
