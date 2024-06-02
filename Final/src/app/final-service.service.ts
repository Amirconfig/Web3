import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Final } from './khanmoamFinal';

@Injectable({
  providedIn: 'root'
})
export class FinalServiceService {

  private finalUrl = 'assets/data/Final.json';

  constructor(private http: HttpClient) { }

  getFinalData(): Observable<Final> {
    return this.http.get<Final>(this.finalUrl);
  }
}