import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all8: any
  quarter: any[] = [];
  item_name: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Worst Quarter Sales for Every Product',
      data: this.sales,
      backgroundColor: 'rgba(114,75,192,0.2)',
      borderColor: 'rgb(75,77,192)',
      borderWidth: 2
    }
  ];
  chartLabels: string[] = this.item_name;

  chartOptions: ChartOptions = {

    indexAxis: 'y',

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

    // ⤵️ Remove the grids
    scales: {
      // x: {
      //   type: 'category'
      // },
      // y: {
      //   beginAtZero: true
      // },
      xAxis: {
        display: false,
        grid: {
          drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: true
      }
    },

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#dac291',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#1a133b',
        titleFont: {
          size: 18
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 15
        }
      }
    }
  };
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
    this.getValue8()
  }

  getValue8(): void{
    this.queryService.getQuery8().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.quarter.push(d.quarter)
          this.item_name.push(d.item_name)
          this.sales.push(d['total sales']);
        }
        this.data_all8 = data
        this.dtTrigger.next(null);
      }
    )
  }
}
