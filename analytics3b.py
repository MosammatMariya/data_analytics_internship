from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics3b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.quarter, i.item_name, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where year = 2019
                    group by cube(t.quarter, i.item_name)
                    order by t.quarter, i.item_name;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["quarter", "item_name", "total_sales"])
        df_q1 = df_q1.dropna()
        df_q1["total_sales"] = df_q1["total_sales"].astype("float64")
        return df_q1.to_dict(orient='records')

        if __name__ == '__main__':
            analytics3b = Analytics3b()
            data = analytics3b.execute()
            print(data)