
from flask_restful import Resource, reqparse

class ReasonApp(Resource):

    def get(self):
        return {'message': 'Hello, World!'}
    
    def post(self):
        # recieves json with fields 'type' and 'message', does nothing
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)
        args = parser.parse_args()
        print(args)
        return {'message': 'Hello, World!'}
    
