import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all4: any
  Year: any[] = [];
  Quarter: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "polarArea",
      label: '2015 Sales',
      data: this.sales,
      backgroundColor: [
        'rgb(75,19,110)',
        'rgb(11,73,73)',
        'rgb(161,119,43)',
        'rgb(14,75,117)'
      ],
      hoverBackgroundColor: [
        'rgba(60, 60, 60, 1)'
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)'
      ],
      borderWidth: 1
    }
  ];
  chartLabels: string[] = ['Q1','Q2','Q3','Q4'];

  chartOptions: ChartOptions = {


    responsive: true,
    maintainAspectRatio: true,


    scales: {
      x: {
        type: 'category'
      },
      y: {
        beginAtZero: true
      },
      xAxis: {
        display: false,
        grid: {
          drawBorder: false
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
  ngOnInit(): void {
    this.getValue4()
  }

  getValue4(): void{
    this.queryService.getQuery4().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Year.push(d.Year)
          this.Quarter.push(d.Quarter)
          this.sales.push(d['total sales']);
        }
        this.data_all4 = data
      }
    )
  }
}
