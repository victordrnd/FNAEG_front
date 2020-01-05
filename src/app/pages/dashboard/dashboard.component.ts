import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  ngOnInit() {
    
  }
  ngAfterViewInit(){
    
    
  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 100], label: 'Stock global' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    title : {
      display :true,
      text : 'Variation du stock',
      fontColor : 'white'
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        display: true,
        gridLines : {color :'rgba(255,255,255,0.09)', zeroLineColor : 'transparent'},
        ticks :{
          fontColor : 'white'
        }
      }],
      yAxes: [
        {
          gridLines: { color: 'transparent', drawTicks: false, zeroLineColor : '#ffffff44' },
          display: true,
          ticks: {
            beginAtZero: true,
            fontColor : 'white',
            stepSize : 50
          }
          
        }
      ]
    }
  };
  public lineChartColors : Color[] = [
    { // grey
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: '#fff',
      
    }
  ];
  
  public lineChartLegend = false;
  public lineChartType = 'line';
  //public lineChartPlugins = [pluginAnnotations];






}
