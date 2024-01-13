from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

from app.reason_app import ReasonApp

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/browser")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

api.add_resource(ReasonApp, '/flask/hello')

if __name__ == "__main__":
    app.run(port=8080, debug=True)