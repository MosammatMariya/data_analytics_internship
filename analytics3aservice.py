from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics3a import Analytics3a

class Analytics3aAPI(MethodView):
    def __init__(self):
        self.a3a = Analytics3a()

    def get(self):
        result = self.a3a.execute()
        return jsonify(result)