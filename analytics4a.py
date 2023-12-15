from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics4a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.year, s.store_size, sum(f.quantity) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year, s.store_size)
                    order by t.year, s.store_size desc;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["year", "store_size", "quantity"])
        df_q1 = df_q1.dropna()
        df_q1["quantity"] = df_q1["quantity"].astype("float64")
        return df_q1.to_dict(orient='records')

        if __name__ == '__main__':
            analytics4a = Analytics4a()
            data = analytics4a.execute()
            print(data)