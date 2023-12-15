from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics2a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select t.year, c.division, sum(f.total_price) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.customer_dim c on c.coustomer_key = f.coustomer_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2014
                    group by rollup(t.year, c.division)
                    order by sum(f.total_price) desc;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q2 = pd.DataFrame(records, columns=["year", "customer_division", "total_sales"])
        df_q2 = df_q2.dropna()
        df_q2["total_sales"] = df_q2["total_sales"].astype("float64")
        return df_q2.to_dict(orient='records')

    if __name__ == '__main__':
        analytics2a = Analytics2a()
        data = analytics2a.execute()
        print(data)
