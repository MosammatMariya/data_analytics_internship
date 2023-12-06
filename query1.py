from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query1:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1(self):
        con = self.con
        cur = con.cursor()

        df_q1 = "select s.division, sum(f.total_price) from ecomdb_star_schema.fact_table f"\
                " join ecomdb_star_schema.store_dim s on f.store_key = s.store_key"\
                " group by cube(s.division)"\
                " order by s.division"

        cur.execute(df_q1)
        result = cur.fetchall()
        df_q1 = pd.DataFrame(list(result), columns=["division", "total sales"])
        df_q1["total sales"] =  df_q1["total sales"].astype("float64")
        df_q1 =  df_q1.dropna()
        # print(pd_data)
        return df_q1.to_dict(orient='records')
        # return result

    def execute2(self):
        con = self.con
        cur = con.cursor()

        df_q1 = df_q1 = "select s.district, sum(f.total_price) from ecomdb_star_schema.fact_table f"\
                        " join ecomdb_star_schema.store_dim s on f.store_key = s.store_key"\
                        " group by cube(s.district)"\
                        " order by s.district"\

        cur.execute(df_q1)
        result = cur.fetchall()
        df_q1 = pd.DataFrame(list(result), columns=["district","total sales"])
        df_q1["total sales"] =  df_q1["total sales"].astype("float64")
        df_q1 =  df_q1.dropna()
        # print(pd_data)
        return  df_q1.to_dict(orient='records')
        # return result

if __name__ == '__main__':
    query1 = Query1()
    data = query1.execute1()
    print(data)
