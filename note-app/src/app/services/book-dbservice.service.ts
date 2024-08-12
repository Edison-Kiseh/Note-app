import { Injectable } from '@angular/core';
import { Notebook } from '../models/notebooks.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookDBServiceService {

  constructor(private http: HttpClient){}

  getNotebooks(): Observable<Notebook[]>{
    const url = "http://localhost:3000/notebooks";
    return this.http.get<Notebook[]>(url);
  }

  addNewNoteBook(notebook: Notebook): Observable<Notebook>{
    const url = "http://localhost:3000/notebooks";
    return this.http.post<Notebook>(url, notebook);
  }

  updateNoteBook(notebook: Notebook): Observable<Notebook>{
    const url = "http://localhost:3000/notebooks/" + notebook.id;
    return this.http.patch<Notebook>(url, notebook);
  }

  deleteNoteBook(id: string): Observable<String>{
    const url = "http://localhost:3000/notebooks/" + id;
    return this.http.delete<String>(url);
  }

  deleteDeletedNoteBook(id: string): Observable<String>{
    const url = "http://localhost:3000/deletedNotes/" + id;
    return this.http.delete<String>(url);
  }

  getSingleNotebook(id: string): Observable<Notebook>{
    const url = "http://localhost:3000/notebooks/" + id;
    return this.http.get<Notebook>(url);
  }
}
