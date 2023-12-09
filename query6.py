from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query6:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    @property
    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q1 = """ SELECT s.store_key, i.item_name, sum(f.quantity) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.item_dim i on i.item_key = f.item_key
                    group by cube(s.store_key, i.item_name)
                    order by s.store_key, sum(f.quantity) desc;
                """
        cur.execute(df_q1)
        records = cur.fetchall()
        df_q2 = pd.DataFrame(records, columns=["store_key", "item_name", "total sales(quantity)"])
        df_q2 = df_q2.dropna()
        df_q3 = df_q2.groupby("store_key").head(3)
        # print(pd_data)
        return df_q2.to_dict(orient='records')
        # return result
if __name__ == '__main__':
    query6 = Query6()
    data = query6.execute
    print(data)
