import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-analytics1b',
  templateUrl: './analytics1b.component.html',
  styleUrls: ['./analytics1b.component.css']
})
export class Analytics1bComponent implements OnInit {

  data_alla1b: any[] = [];
  Year: any[] = [];
  store: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Total Sales by Store Size',
      data: this.sales,
      backgroundColor: 'rgb(27,74,117)',
      borderColor: 'rgb(9,18,54)',
      borderWidth: 1
    }
  ];
  chartLabels: string[] = this.store;

  chartOptions: ChartOptions = {

    responsive: true,
    maintainAspectRatio: true,

    scales: {
      x:{
        type: 'category'
      },
      y:{
        beginAtZero: true
      },
      xAxis: {
        display: false,
        grid: {
          drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: false
      }
    },

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

        bodyColor: '#2d2354',
        bodyFont: {
          size: 13
        }
      }
    }
  };
  constructor(private queryService: QueryService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.analytics1b();
  }

  private analytics1b() {
    this.queryService.getanalytics1b().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.store.push(d.store_size)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla1b = data;
      }
    );
  }
}
