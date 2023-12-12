import { Component, OnInit } from '@angular/core';
import { QueryService } from "../../services/query.service";
import { HttpClient } from "@angular/common/http";
import { ChartDataset, ChartOptions } from "chart.js";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css']
})
export class Query9Component implements OnInit {

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all9: any
  division: any[] = [];
  item_name: any[] = [];
  sales: any[] = [];
  option: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  selectedDataCount: number = 10; // Default value


  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Total Sales of items in Every Division',
      data: this.sales,
      backgroundColor: 'rgba(20,18,58,0.2)',
      borderColor: 'rgb(79,75,192)',
      borderWidth: 1,
      // fill: false,
      // tension: 0.1

    }
  ];
  chartLabels: string[] = this.division;

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
      // x: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
      xAxis: {
        display: true,
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
      // pageLength: 10,
      // processing: true,
      // serverSide: true,
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Search any'
      }
    };
    this.getValue9()
  }

  getValue9(): void{
    this.queryService.getQuery9().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.item_name.push(d.item_name)
          this.sales.push(d['total sales']);
        }
        this.data_all9 = data
        this.dtTrigger.next(null);
      }
    )
  }

  updateChartData(): void {
    // Validate selectedDataCount
    if (this.selectedDataCount < 1 || this.selectedDataCount > this.data_all9.length) {
      console.error('Invalid selectedDataCount');
      return;
    }

    // Update chartData and chartLabels based on the selectedDataCount
    const selectedData = this.data_all9.slice(0, this.selectedDataCount);

    // Clear existing data
    this.chartData[0].data = [];
    this.chartLabels = [];

    // Update with selected data
    for (const d of selectedData) {
      this.chartData[0].data.push(d['total sales']);
      this.chartLabels.push(d.division);
    }
  }

}
