import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {

  data_all: any[] = [];
  division: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Sales in Taka',
      data: this.sales,
    }
  ];
  chartLabels: string[] = this.division;

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

  ngOnInit() {
    this.query1DivisionData();
  }

  query1DivisionData(): void {
    this.queryService.getQuery1Division().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.sales.push(d['total sales'])
        }
        this.data_all = data;
      }
    );
  }
}
