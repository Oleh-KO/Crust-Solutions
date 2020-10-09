import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CameraService {

  constructor(private httpClient: HttpClient) { }

  public getData(req: any): Observable<HttpEvent<any>> {
    return this.httpClient.get<any>(`${environment.MOCK_API_ENDPOINT}/data`, req);
  }

}
