import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class IssueService {

  static BASE_URL = 'http://127.0.0.1:5000/btt/api/v1.0';

  constructor(private http: Http) {}

  query(
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${IssueService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = 'apiKeyValue';
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http
      .request(queryURL, options)
      .pipe(map((res: any) => res.json()));
  }

  search(query: string): Observable<any[]> {
    return this.query(`/issues`, [
      `q=${query}`,
      `type=${'ISSUE'}`
    ]);
    // return this.query(`/issues`);
  }
}
