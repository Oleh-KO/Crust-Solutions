import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CameraService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getData(req) {
    return this.httpClient.get<any>(`${environment.MOCK_API_ENDPOINT}/data`, req);
  }

}
