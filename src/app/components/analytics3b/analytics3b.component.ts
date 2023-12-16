import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";
import {Subject} from "rxjs";

@Component({
  selector: 'app-analytics3b',
  templateUrl: './analytics3b.component.html',
  styleUrls: ['./analytics3b.component.css']
})
export class Analytics3bComponent implements OnInit {

  data_alla3b: any[] = [];
  Year: any[] = [];
  item: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Item-wise sales in quarter',
      data: this.sales,
      backgroundColor: 'rgba(114,75,192,0.2)',
      borderColor: 'rgb(75,77,192)',
      borderWidth: 2
    }
  ];
  chartLabels: string[] = this.item;

  chartOptions: ChartOptions = {

    indexAxis: 'y',

    responsive: true,
    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
     scales: {
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
    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      // pageLength: 10,
      // processing: true,
      // serverSide: true,
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Search any'
      }
    };
    this.analytics3b();
  }

  private analytics3b() {
    this.queryService.getanalytics3b().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.item.push(d.item_name)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla3b = data;
      }
    );
  }
}
