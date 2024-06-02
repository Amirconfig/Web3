import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldData } from './field-data';
import { Khanmoam } from './khanmoam';
import { khanmoamInfo } from '../assets/data/khanmoam-data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private fieldDataURL = 'assets/data/field-data.json';

  constructor(private http: HttpClient) { }

  // Method to retrieve Khanmoam information
  getKhanmoamInfo(): Khanmoam {
    return khanmoamInfo;
  }

  // Method to retrieve field data
  getFieldData(): Observable<FieldData[]> {
    return this.http.get<FieldData[]>(this.fieldDataURL);
  }
}
