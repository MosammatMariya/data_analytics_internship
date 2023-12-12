import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://127.0.0.1:5000/api'
// const baseUrlOther = 'http://127.0.0.1:5000/api1'

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {
  }

  getQuery1Division(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/1`);
  }
  getQuery1District(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/1d`);
  }

  getQuery2(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/2`);
  }

  getQuery3(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/3`);
  }

  getQuery4(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/4`);
  }

  getQuery5(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/5`);
  }

  getQuery6(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/6`);
  }

  getQuery7(days?:any): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify({'days':days});
    return this.http.post(`${baseUrl}/7`, body, {'headers':headers});
  }

  getQuery8(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/8`);
  }

  getQuery9(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/9`);
  }

  getQuery10(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/10`);
  }
}
