import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-analytics4a',
  templateUrl: './analytics4a.component.html',
  styleUrls: ['./analytics4a.component.css']
})
export class Analytics4aComponent implements OnInit {

  data_alla4a: any[] = [];
  Year: any[] = [];
  store: any[] = [];
  quantity: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Total Sales by Quantity',
      data:this.quantity ,
      backgroundColor: 'rgba(15,6,40,0.2)',
      borderColor: 'rgb(8,16,49)',
      borderWidth: 1
    }
  ];
  chartLabels: string[] = this.Year;


  chartOptions: ChartOptions = {

    responsive: true,
    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
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
    this.analytics4a();
  }

  private analytics4a() {
    this.queryService.getanalytics4a().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.store.push(d.store_size)
          this.quantity.push(d.quantity)
          this.Year.push(d.year)
        }
        this.data_alla4a = data;
      }
    );
  }
}
