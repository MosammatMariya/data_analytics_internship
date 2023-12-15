from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics1a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.year, s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on f.store_key = s.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year, s.division)
                    order by t.year, s.division;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["year", "division", "total_sales"])
        df_q1 = df_q1.dropna()
        df_q1["total_sales"] = df_q1["total_sales"].astype("float64")
        return df_q1.to_dict(orient='records')

    if __name__ == '__main__':
        analytics1a = Analytics1a()
        data = analytics1a.execute()
        print(data)
