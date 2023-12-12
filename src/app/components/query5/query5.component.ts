import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css']
})
export class Query5Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all5: any
  Division: any[] = [];
  Quarter: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Total sales of Barisal in 2015 ',
      data: this.sales,
      backgroundColor: 'rgba(23,14,61,0.2)',
      borderColor: 'rgb(75,77,192)',
      borderWidth: 1
    }
  ];
  chartLabels: string[] = this.Quarter;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
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

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };
  ngOnInit(): void {
    this.getValue5()
  }

  getValue5(): void{
    this.queryService.getQuery5().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Division.push(d.Division)
          this.sales.push(d['total sales']);
        }
        this.data_all5 = data
      }
    )
  }
}
