import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  applications = require('../../assets/mock-data.json').applications;

  constructor() { }

  getApplications() {
    return of(this.applications);
  }

}


