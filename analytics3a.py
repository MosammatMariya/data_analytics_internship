from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics3a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.year, i.item_name, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    group by cube(t.year, i.item_name)
                    order by t.year, i.item_name;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["year", "item_name", "total_sales"])
        df_q1 = df_q1.dropna()
        df_q1["total_sales"] = df_q1["total_sales"].astype("float64")
        return df_q1.to_dict(orient='records')

        if __name__ == '__main__':
            analytics3a = Analytics3a()
            data = analytics3a.execute()
            print(data)