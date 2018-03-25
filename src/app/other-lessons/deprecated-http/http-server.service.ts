import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpServer } from './http-server.model';

@Injectable()
export class HttpServerService {

  constructor(private http: Http) { }

  storeServers(servers: HttpServer[]): Observable<Response> {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    return this.http.put('https://udemy-ng-http-62276.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers(): Observable<HttpServer[]> {
    return this.http.get('https://udemy-ng-http-62276.firebaseio.com/data.json')
      .map(response => {
        const data: HttpServer[] = response.json();
        data.forEach(server => server.name = 'FETCHED_' + server.name);
        return data;
      });
  }

  getServersError(): Observable<HttpServer[]> {
    return this.http.get('https://udemy-ng-http-62276.firebaseio.com/data')
      .map(response => {
        const data: HttpServer[] = response.json();
        data.forEach(server => server.name = 'FETCHED_' + server.name);
        return data;
      })
      .catch(error => {
        console.log(error);
        return Observable.throw('Something went wrong');
      });
  }

}
