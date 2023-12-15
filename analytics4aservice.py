from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics4a import Analytics4a

class Analytics4aAPI(MethodView):
    def __init__(self):
        self.a4a = Analytics4a()

    def get(self):
        result = self.a4a.execute()
        return jsonify(result)