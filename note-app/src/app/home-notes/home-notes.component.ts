import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';
import { RouterModule } from '@angular/router';
import { NoteTitlePipe } from '../pipes/note-title.pipe';
import { NotePipePipe } from '../pipes/note-pipe.pipe';

@Component({
  selector: 'app-home-notes',
  standalone: true,
  imports: [CommonModule, RouterModule, NoteTitlePipe, NotePipePipe],
  templateUrl: './home-notes.component.html',
  styleUrl: './home-notes.component.css',
})
export class HomeNotesComponent {
  showListFlag = false;
  listPositionX: number = 0;
  listPositionY: number = 0;
  selectedNoteIndex: number = -1;
  @Input('notesForChild') notes: Note[] = []
  @Output() displayNoteEvent = new EventEmitter<number>()
  @Output() delNoteEvent = new EventEmitter<number>()
  @Output() changedNotesNameEvent = new EventEmitter<Note>()
  editing = new Array(this.notes.length).fill(false);

  calculateMinutes(index: number): string{
    const noteTime = new Date(this.notes[index].time);
    const currentTime = new Date();
    const elapsedTimeMilliseconds = currentTime.getTime() - noteTime.getTime();
    const elapsedTimeSeconds = Math.floor(elapsedTimeMilliseconds / 1000);
    const elapsedTimeMinutes = Math.floor(elapsedTimeSeconds / 60);
    const elapsedTimeHours = Math.floor(elapsedTimeMinutes / 60);
    const elapsedTimeDays = Math.floor(elapsedTimeHours / 24);
    
    if (elapsedTimeDays > 0) {
      return elapsedTimeDays + (elapsedTimeDays === 1 ? ' day ago' : ' days ago');
    } else if (elapsedTimeHours > 0) {
      return elapsedTimeHours + (elapsedTimeHours === 1 ? ' hour ago' : ' hours ago');
    } else if (elapsedTimeMinutes > 0) {
      return elapsedTimeMinutes + (elapsedTimeMinutes === 1 ? ' minute ago' : ' minutes ago');
    } else {
      return elapsedTimeSeconds + (elapsedTimeSeconds === 1 ? ' second ago' : ' seconds ago');
    }
  }

  displayNoteText(index: number): void{
    this.displayNoteEvent.emit(index);
  }

  deleteNoteReq(index: number): void{
    this.hideList()
    console.log(index)
    this.delNoteEvent.emit(index)
  }

  showList(event: MouseEvent) {
    event.preventDefault(); // Prevent the default right-click context menu
    this.showListFlag = true;
    this.listPositionX = event.clientX;
    this.listPositionY = event.clientY;
  }

  hideList() {
    this.showListFlag = false;
  }

  setSelectedNoteIndex(index: number): void{
    this.selectedNoteIndex = index
  }

  toggleEdit(index: number) {
    this.hideList()
    //send the edited info to the parent
    setTimeout(() => {
      this.editing[index] = !this.editing[index];
      if (!this.editing[index]) {
          this.changedNotesNameEvent.emit(this.notes[index]);
      }
    });
  }
}
