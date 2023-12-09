from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query5:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    @property
    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q1 = """ SELECT s.division, t.quarter, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2015 AND s.division = 'Dhaka'
                    group by cube(s.division, t.quarter)
                    order by t.quarter;
                """
        cur.execute(df_q1)
        records = cur.fetchall()
        df_q2 = pd.DataFrame(records, columns=["division", "quarter", "total sales"])
        df_q2 = df_q2.dropna()
        # print(pd_data)
        return df_q2.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query5 = Query5()
    data = query5.execute
    print(data)
