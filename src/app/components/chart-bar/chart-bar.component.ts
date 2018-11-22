import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {

  chartData = [
    ['', 0],
    ['', 0],
    ['', 0]
  ];

  inProgressChartInfo = { name: 'In Progress', position: 0, color: '#0066ff' };
  pendingChartInfo = { name: 'Pending', position: 1, color: '#ff5050' };
  completedChartInfo = { name: 'Completed', position: 2, color: '#00cc00' };

  constructor(private applicationsService: ApplicationsService) { }

  ngOnInit() {
    this.applicationsService.getApplications().subscribe(applications => {
      this.chartData = [
        ['', applications.inProgress],
        ['', applications.pending],
        ['', applications.completed]      ];
    });
  }

}
