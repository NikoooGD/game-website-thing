from flask import Flask, render_template
from livereload import Server

app = Flask(__name__, static_folder="static", static_url_path="")


@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/index2")
def page2():
    return render_template("index2.html")


@app.route("/valorant_lore_page.html")
def page3():
    return render_template("valorant_lore_page.html")


if __name__ == "__main__":
    server = Server(app.wsgi_app)
    server.watch("templates/")
    server.watch("static/")
    server.serve(host="localhost", port=8000)
