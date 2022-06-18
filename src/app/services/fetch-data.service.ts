import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('assets/gameTypes/gameTyps.json');
  }
}
