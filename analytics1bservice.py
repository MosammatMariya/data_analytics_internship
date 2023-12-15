from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics1b import Analytics1b

class Analytics1bAPI(MethodView):
    def __init__(self):
        self.a1b = Analytics1b()

    def get(self):
        result = self.a1b.execute()
        return jsonify(result)