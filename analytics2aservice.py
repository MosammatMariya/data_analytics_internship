from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics2a import Analytics2a

class Analytics2aAPI(MethodView):
    def __init__(self):
        self.a2a = Analytics2a()

    def get(self):
        result = self.a2a.execute()
        return jsonify(result)