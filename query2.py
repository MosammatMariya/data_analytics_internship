from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query2:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q1 = """ select t.trans_type, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.trans_dim t on f.payment_key = t.payment_key
                    group by cube(t.trans_type)
                    order by t.trans_type
                """
        cur.execute(df_q1)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(list(records), columns=["trans type", "total sales"])
        df_q1["total sales"] = df_q1["total sales"].astype("float64")
        df_q1 = df_q1.dropna()
        # print(pd_data)
        return df_q1.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query2 = Query2()
    data = query2.execute()
    print(data)
