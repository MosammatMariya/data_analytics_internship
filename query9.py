from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query9:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    @property
    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q1 = """ SELECT i.item_name, s.division, sum(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    group by cube(i.item_name, s.division)
                    order by i.item_name, s.division;
                """
        cur.execute(df_q1)
        records = cur.fetchall()
        df_q2 = pd.DataFrame(records, columns=["item_name", "division", "total_price"])
        df_q2 = df_q2.dropna()
        # print(pd_data)
        return df_q2.to_dict(orient='records')
        # return result
if __name__ == '__main__':
    query9 = Query9()
    data = query9.execute
    print(data)