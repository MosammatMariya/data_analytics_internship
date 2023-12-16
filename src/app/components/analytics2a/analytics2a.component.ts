import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-analytics2a',
  templateUrl: './analytics2a.component.html',
  styleUrls: ['./analytics2a.component.css']
})
export class Analytics2aComponent implements OnInit {

  data_alla2a: any[] = [];
  Year: any[] = [];
  customer: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Division -wise Sales in 2014',
      data: this.sales,
    }
  ];
  chartLabels: string[] = this.customer;

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
    }
  };
  constructor(private queryService: QueryService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.analytics2a();
  }

  private analytics2a() {
    this.queryService.getanalytics2a().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.customer.push(d.customer_division)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla2a = data;
      }
    );
  }
}
