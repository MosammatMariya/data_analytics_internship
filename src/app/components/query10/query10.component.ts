import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css']
})
export class Query10Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all10: any
  store_key: any[] = [];
  month: any[] = [];
  avg_total_price: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'Monthly Average Sales of Products Sales per Store ',
      data: this.avg_total_price,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false,
      tension: 0.1

    }
  ];
  chartLabels: string[] = this.store_key;

  chartOptions: ChartOptions = {


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
      // x: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
      xAxis: {
        display: true,
        grid: {
          drawBorder: false
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
        backgroundColor: '#dac291',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        titleColor: '#1a133b',
        titleFont: {
          size: 18
        },


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
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Search any'
      }
    };
    this.getValue10()
  }

  getValue10(): void{
    this.queryService.getQuery10().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.store_key.push(d.store_key)
          this.month.push(d.month)
          this.avg_total_price.push(d.avg_total_price);
        }
        this.dtTrigger.next(null);
        this.data_all10 = data
      }
    )
  }
}
