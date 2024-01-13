
from flask_restful import Resource, reqparse

class ReasonApp(Resource):

    def get(self, message):
        return {
            'resultStatus': 'SUCCESS',
            'message': f"{message}"
        }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()

        print(args)
        # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

        request_type = args['type']
        request_json = args['message']
        ret_msg = request_json

        if ret_msg:
            message = "Ay no!"
            print(message)
        else:
            message = "Silence everywhere"
        
        final_ret = {"status": "Success", "message": message}

        return final_ret
