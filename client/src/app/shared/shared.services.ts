import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SharedServices {

  constructor(private http: HttpClient) { }

  getAllStatus() {
    return this.http.get(`${environment.serverHomeUri}/status`);
  }

  getTasksList(status) {
    return this.http.get(`${environment.serverTasksUri}/tasks/${status}`);
  }

}
