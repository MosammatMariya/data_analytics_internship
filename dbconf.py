import psycopg2
import psycopg2.extras


class PostgresConnection(object):
    def __init__(self):
        self.connection = psycopg2.connect(database="ecomdb",
                                           user="postgres",
                                           password="BT21",
                                           host="127.0.0.1",
                                           port="5432")

    def getConnection(self):
        print("Connection to DB established!")
        return self.connection
