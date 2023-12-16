import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";
import {Subject} from "rxjs";

@Component({
  selector: 'app-analytics2b',
  templateUrl: './analytics2b.component.html',
  styleUrls: ['./analytics2b.component.css']
})
export class Analytics2bComponent implements OnInit {

  data_alla2b: any[] = [];
  Year: any[] = [];
  customer: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  //selectedDataCount: number = 10;

  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'Sales by Division',
      data: this.sales,
      backgroundColor: 'rgba(9,138,138,0.2)',
      borderColor: 'rgb(11,73,73)',
      borderWidth: 1,
      fill: true,
      tension: 0.1,
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
    this.analytics2b();
  }

  private analytics2b() {
    this.queryService.getanalytics2b().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.customer.push(d.customer_division)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla2b = data;
      this.dtTrigger.next(null);
      }
    );
  }
}
