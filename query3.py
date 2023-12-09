from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query3:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    @property
    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q1 = """ SELECT s.division, SUM(f.total_price) FROM ecomdb_star_schema.fact_table f 
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    group by cube(s.division)
                    order by s.division;
                """
        cur.execute(df_q1)
        records = cur.fetchall()
        b = pd.DataFrame(records, columns=["division", "total price"])
        return b.to_dict(orient='records')
        # return result
if __name__ == '__main__':
    query3 = Query3()
    data = query3.execute
    print(data)
