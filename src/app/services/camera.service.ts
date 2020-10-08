import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CameraService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getData(req) {
    return this.httpClient.get<any>('http://localhost:3000/data', req);
  }

}
