import { Component, OnInit } from '@angular/core';
import {QueryService} from "../../services/query.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";
import {Subject} from "rxjs";

@Component({
  selector: 'app-analytics3a',
  templateUrl: './analytics3a.component.html',
  styleUrls: ['./analytics3a.component.css']
})
export class Analytics3aComponent implements OnInit {

  data_alla3a: any[] = [];
  Year: any[] = [];
  item: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Item wise total sales each year',
      data: this.sales,
      backgroundColor: 'rgba(15,6,40,0.2)',
      borderColor: 'rgb(8,16,49)',
      borderWidth: 1
    }
  ];
  chartLabels: string[] = this.item;

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

    this.option = {
      paging: true,
      searching: true,
      lengthChange: true,
      pageLength: 10,
      processing: true,
      serverSide: true,
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Search any'
      }
    };
    this.analytics3a();
  }

  private analytics3a() {
    this.queryService.getanalytics3a().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.item.push(d.item_name)
          this.sales.push(d['total_sales'])
          this.Year.push(d.year)
        }
        this.data_alla3a = data;
      this.dtTrigger.next(null);
      }
    );
  }
}
