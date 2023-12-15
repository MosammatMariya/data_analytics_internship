from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics3b import Analytics3b

class Analytics3bAPI(MethodView):
    def __init__(self):
        self.a3b = Analytics3b()

    def get(self):
        result = self.a3b.execute()
        return jsonify(result)