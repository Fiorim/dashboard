import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent {

  chartData = [
    ['', 5],
    ['', 3],
    ['', 8]
  ];

  inProgressChartInfo = { name: 'In Progress', value: 5, position: 0, color: '#0066ff' };
  pendingChartInfo = { name: 'Pending', value: 3, position: 1, color: '#ff5050' };
  completedChartInfo = { name: 'Completed', value: 8, position: 2, color: '#00cc00' };

  constructor() { }

}
