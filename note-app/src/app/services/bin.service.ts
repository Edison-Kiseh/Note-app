import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bin } from '../models/bin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BinService {

  constructor(private http: HttpClient){}

  emptyBin(id: string): Observable<any> {
    const url = "http://localhost:3000/deletedNotes/" + id;
    return this.http.delete(url);
  }
}
