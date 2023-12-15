from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics1a import Analytics1a

class Analytics1aAPI(MethodView):
    def __init__(self):
        self.a1a = Analytics1a()

    def get(self):
        result = self.a1a.execute()
        return jsonify(result)