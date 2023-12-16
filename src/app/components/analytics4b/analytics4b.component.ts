import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-analytics4b',
  templateUrl: './analytics4b.component.html',
  styleUrls: ['./analytics4b.component.css']
})
export class Analytics4bComponent implements OnInit {

  data_alla4b: any[] = [];
  division: any[] = [];
  year: any[] = [];
  unit: any[] = [];
  count: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'Unit count of 2022',
      data: this.count,
      backgroundColor: 'rgb(5,127,227)',
      borderColor: 'rgb(11,73,73)',
      borderWidth: 1,
      fill: true,
      tension: 0.1
    }
  ];
  chartLabels: string[] = this.unit;

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
    this.analytics4b();
  }

  private analytics4b() {
    this.queryService.getanalytics4b().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.count.push(d['unit_count'])
          this.year.push(d.year)
          this.unit.push(d.unit)
        }
        this.data_alla4b = data;
      }
    );
  }
}


