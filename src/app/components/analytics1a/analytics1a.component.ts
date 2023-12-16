// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";
import {Subject} from "rxjs";

@Component({
  selector: 'app-analytics1a',
  templateUrl: './analytics1a.component.html',
  styleUrls: ['./analytics1a.component.css']
})
export class Analytics1aComponent implements OnInit {

  data_alla1a: any[] = [];
  Year: any[] = [];
  division: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  // selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Total Sales by Division',
      data: this.sales,
      backgroundColor: 'rgba(15,6,40,0.2)',
      borderColor: 'rgb(8,16,49)',
      borderWidth: 1
    }
  ];

  chartLabels: string[] = this.division;

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

        bodyColor: '#0a071a',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  constructor(private queryService: QueryService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      pageLength: 10,
      processing: true,
      serverSide: true,
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Search any'
      }
    };
    this.analytics1a();
  }

  private analytics1a() {
    this.queryService.getanalytics1a().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla1a = data;
      this.dtTrigger.next(null);
      }
    );
  }

  // updateChartData(): void {
  //
  //   if (this.selectedDataCount < 1 || this.data_alla1a.length < this.selectedDataCount) {
  //     console.error('Invalid selectedDataCount');
  //     return;
  //   }
  //
  //
  //   const selectedData = this.data_alla1a.slice(0, this.selectedDataCount);
  //
  //
  //   this.chartData[0].data = [];
  //   this.chartLabels = [];
  //
  //
  //   for (const d of selectedData) {
  //     this.chartData[0].data.push(d['total_sales']);
  //     // this.chartLabels.push(d.item_name);
  //     this.chartLabels.push(d.division);
  //   }
  // }

}

