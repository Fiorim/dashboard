import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonutChartComponent,
    ChartBarComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    GoogleChartsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
