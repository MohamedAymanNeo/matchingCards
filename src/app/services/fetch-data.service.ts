import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as env from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }
  
  fetchData() {
    return this.http.get('assets/gameTypes/gameTyps.json');
  }
  getTypes() {
    return this.http.get('assets/gameTypes/types.json');
  }
  // getImages() {
  //   return this.http.get(`https://res.cloudinary.com/elafreet/image/upload/v1655594143/memoryGame/numbers/two.png`)
  // }
}
