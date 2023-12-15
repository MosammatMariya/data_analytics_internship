from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics5a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.year, t.quarter, sum(i.stock_quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year, t.quarter)
                    order by t.year, t.quarter;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["year", "quarter", "stock_quantity"])
        df_q1 = df_q1.dropna()
        df_q1["stock_quantity"] = df_q1["stock_quantity"].astype("int")
        return df_q1.to_dict(orient='records')

        if __name__ == '__main__':
            analytics5a = Analytics5a()
            data = analytics5a.execute()
            print(data)