from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics5a import Analytics5a

class Analytics5aAPI(MethodView):
    def __init__(self):
        self.a5a = Analytics5a()

    def get(self):
        result = self.a5a.execute()
        return jsonify(result)