from flask import jsonify, request
from flask.views import MethodView
from QueryController.analytics2b import Analytics2b

class Analytics2bAPI(MethodView):
    def __init__(self):
        self.a2b = Analytics2b()

    def get(self):
        result = self.a2b.execute()
        return jsonify(result)