import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ChartInfo } from 'src/app/interfaces/chart-info.interface';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DonutChartComponent implements OnInit {

  @Input() chartData = [
    ['', 0],
    ['', 0],
    ['', 0]
  ];

  chartOptions = {
    colors: ['#e6e6e6', '#e6e6e6', '#e6e6e6'],
    pieHole: 0.8,
    tooltip: {trigger: 'none'},
    legend: {position: 'none'},
    animation: {
      duration: 1000,
      easing: 'out',
    },
    backgroundColor: { fill: 'transparent' }
  };

  @Input() chartInfo: ChartInfo;

  constructor() { }
  ngOnInit() {
    this.chartOptions.colors[this.chartInfo.position] = this.chartInfo.color;
  }
}
