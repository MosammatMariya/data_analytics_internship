import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all2: any
  trans: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "doughnut",
      label: 'Transaction',
      data: this.sales,
    }
  ];
  chartLabels: string[] = ['Card','Cash','Mobile'];

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
    // scales: {
    //   xAxis: {
    //     display: true,
    //     grid: {
    //       drawBorder: true // removes random border at bottom
    //     }
    //   },
    //   yAxis: {
    //     display: true
    //   }
    // },

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {

        backgroundColor: '#dac291',
        displayColors: true, // removes unnecessary legend
        padding: 10,

        titleColor: '#1a133b',
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
    this.getTrans()
  }

  getTrans(): void{
    this.queryService.getQuery2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.trans.push(d['trans type'])
          this.sales.push(d['total sales'])
        }
        this.data_all2 = data
      }
    )
  }

}
