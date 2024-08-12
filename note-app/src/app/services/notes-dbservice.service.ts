import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note.model';
import { Bin } from '../models/bin.model';
import { Observable } from 'rxjs';
import { Notebook } from '../models/notebooks.model';

@Injectable({
  providedIn: 'root'
})
export class NotesDBServiceService {

  constructor(private http: HttpClient){}

  getNotes(NBId: string): Observable<Note[]> {
    if(NBId == ""){
      const url = "http://localhost:3000/notes";
      return this.http.get<Note[]>(url);
    }
    else{
      const url = "http://localhost:3000/notes?notebookId=" + NBId;
      return this.http.get<Note[]>(url);
    }
  }

  getNotesBySearch(pattern: string): Observable<Note[]>{
    const url = "http://localhost:3000/notes?title=" + pattern;
    return this.http.get<Note[]>(url);
  }

  addNote(note: Note): Observable<Note>{
    const url = "http://localhost:3000/notes";
    return this.http.post<Note>(url, note);
  }

  updateNoteName(note: Note): Observable<Note>{
    const url = `http://localhost:3000/notes/` + note.id;
    return this.http.patch<Note>(url, note);
  }

  saveNoteTitle(noteId: string, updatedNote: Note): Observable<Note> {
    const url = `http://localhost:3000/notes/${noteId}`;
    return this.http.patch<Note>(url, updatedNote);
  }
  
  saveNoteText(noteId: string, updatedNote: Note): Observable<Note> {
    const url = `http://localhost:3000/notes/${noteId}`;
    return this.http.put<Note>(url, updatedNote);
  }

  moveNoteToRecycleBin(note: Bin): Observable<Bin> {
    const url = "http://localhost:3000/deletedNotes";
    return this.http.post<Bin>(url, note);
  }

  deleteNote(noteId: string): Observable<any>{
    const url = `http://localhost:3000/notes/${noteId}`;
    return this.http.delete(url);
  }

  deleteDeletedNotes(noteId: string): Observable<any>{
    const url = "http://localhost:3000/deletedNotes/" + noteId;
    return this.http.delete(url);
  }

  getDeletedNotes(): Observable<Bin[]>{
    const url = "http://localhost:3000/deletedNotes"
    return this.http.get<Bin[]>(url);
  }

  getNotesByNotebookId(notebookId: string): Observable<Note[]> {
    const url = "http://localhost:3000/notes?notebookId=" + notebookId;
    return this.http.get<Note[]>(url);
  }

}
