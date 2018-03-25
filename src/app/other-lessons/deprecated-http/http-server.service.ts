import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpServerService {

  constructor(private http: Http) { }

  storeServers(servers: {name: string, capacity: number, id: number}[]): Observable<Response> {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    return this.http.post('https://udemy-ng-http-62276.firebaseio.com/data.json', servers, {headers: headers});
  }

}
