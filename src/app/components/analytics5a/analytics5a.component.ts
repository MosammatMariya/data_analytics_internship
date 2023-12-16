import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-analytics5a',
  templateUrl: './analytics5a.component.html',
  styleUrls: ['./analytics5a.component.css']
})
export class Analytics5aComponent implements OnInit {

  data_alla5a: any[] = [];
  Year: any[] = [];
  quarter: any[] = [];
  quantity: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "radar",
      label: 'Yearly stock Quantity',
      data: this.quantity,
      backgroundColor: 'rgba(225,208,43,0.5)',
      borderColor: 'rgb(23,103,20)',
      borderWidth: 3
    }
  ];
  chartLabels: string[] = this.Year;

  chartOptions: ChartOptions = {

    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        backgroundColor: '#dac291',
        displayColors: false, // removes unnecessary legend
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
    },
    responsive: true,

    // scales: {
    //   y: {
    //     type: 'linear',
    //     display: true,
    //     position: 'left'
    //   },
    //   y1: {
    //     type: 'linear',
    //     display: true,
    //     position: 'right'
    //   },
    //   xAxis: {
    //     display: false,
    //     grid: {
    //       drawBorder: false // removes random border at bottom
    //     }
    //   },
    //   yAxis: {
    //     display: false
    //   }
    // }
  };
  constructor(private queryService: QueryService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.analytics5a();
  }

  private analytics5a() {
    this.queryService.getanalytics5a().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.quantity.push(d.stock_quantity)
          this.quarter.push(d.quarter)
          this.Year.push(d.year)
        }
        this.data_alla5a = data;
      }
    );
  }
}
