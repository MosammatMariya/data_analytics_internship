from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics4b import Analytics4b

class Analytics4bAPI(MethodView):
    def __init__(self):
        self.a4b = Analytics4b()

    def get(self):
        result = self.a4b.execute()
        return jsonify(result)