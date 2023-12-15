from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics4b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")

    def execute(self):
        con = self.con
        cur = con.cursor()

        df_q = """ select s.division, t.year, f.unit, count(f.unit) from ecomdb_star_schema.fact_table f
                    join ecomdb_star_schema.store_dim s on s.store_key = f.store_key
                    join ecomdb_star_schema.time_dim t on t.time_key = f.time_key
                    where t.year = 2022
                    group by cube(s.division, t.year, f.unit)
                    order by s.division, f.unit;
                """

        cur.execute(df_q)
        records = cur.fetchall()
        df_q1 = pd.DataFrame(records, columns=["division", "year", "unit", "unit_count"])
        df_q1 = df_q1.dropna()
        return df_q1.to_dict(orient='records')

        if __name__ == '__main__':
            analytics4b = Analytics4b()
            data = analytics4b.execute()
            print(data)