import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";


@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css']
})
export class MyComComponent implements OnInit {

  constructor(protected queryService: QueryService, public http: HttpClient) { }

  data_all: any
  district: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Sales in Taka',
      data: this.sales,
    }
  ];
  chartLabels: string[] = this.district;

  chartOptions: ChartOptions = {

    responsive: true,
    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
    // scales: {
    //   xAxis: {
    //     display: false,
    //     grid: {
    //       drawBorder: false // removes random border at bottom
    //     }
    //   },
    //   yAxis: {
    //     display: false
    //   }
    // },

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        backgroundColor: '#d9c5a3',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        titleColor: '#052c81',
        titleFont: {
          size: 18
        },

        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  ngOnInit(): void {
    this.getDistrict()
  }


  getDistrict(): void{
    this.queryService.getQuery1District().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.district.push(d.district)
          this.sales.push(d['total sales'])
        }
        this.data_all = data
      }
    )
  }

}
