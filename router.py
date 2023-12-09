# from QueryServices.query1service import Query1API
# from QueryServices.query2service import Query2API
# from QueryServices.query2service import Query7API
#
# from flask import Blueprint
#
# query_api = Blueprint('queryapi',__name__)
# query_api1 = Blueprint('queryapi1',__name__)
#
# query_api.add_url_rule('/query1', view_func=Query1API.as_view("Get Division Wise Sales"))
# query_api.add_url_rule('/query2', view_func=Query2API.as_view("Custoer Wise Total Sales"))
# query_api1.add_url_rule('/query7', view_func=Query7API.as_view("X days"))

from QueryServices.query1service import Query1API, Query1API2
from QueryServices.query2service import Query2API
from QueryServices.query3service import Query3API
from QueryServices.query4service import Query4API
from QueryServices.query5service import Query5API
from QueryServices.query6service import Query6API
from QueryServices.query7service import Query7API
from QueryServices.query8service import Query8API
from QueryServices.query9service import Query9API
from QueryServices.query10service import Query10API

from flask import Blueprint

query_api = Blueprint('queryapi', __name__)

query_api.add_url_rule('/1', view_func=Query1API.as_view("Get Division Wise Sales"))
query_api.add_url_rule('/1d', view_func=Query1API2.as_view("Get District Wise Sales"))
query_api.add_url_rule('/2', view_func=Query2API.as_view("Get transaction(cash/mobile/card) wise total sales"))
query_api.add_url_rule('/3', view_func=Query3API.as_view("Get Total sales in Barisal"))
query_api.add_url_rule('/4', view_func=Query4API.as_view("Get Total sales in 2015"))
query_api.add_url_rule('/5', view_func=Query5API.as_view("Get Total sales of Barisal in 2015"))
query_api.add_url_rule('/6', view_func=Query6API.as_view("Get the top three products that are most often purchased each store(or item supplier)"))
query_api.add_url_rule('/8', view_func=Query8API.as_view("Get the season(quarter)that is the worst for each product item"))
query_api.add_url_rule('/9', view_func=Query9API.as_view("Get the total sales of items geographically (division-wise)"))
query_api.add_url_rule('/10', view_func=Query10API.as_view("Get the average sales of products sales per store monthly"))

query_api.add_url_rule('/7', view_func=Query7API.as_view(" X days"))

