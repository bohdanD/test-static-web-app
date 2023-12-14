import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getData() : Observable<Data[]> {
    return this.http.get<Data[]>(`${environment.apiUrl}/api/DataFunction`);
  }
}