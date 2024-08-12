import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotebookTitlePipe } from '../pipes/notebook-title.pipe';
import { Notebook } from '../models/notebooks.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-notebooks',
  standalone: true,
  imports: [NotebookTitlePipe, CommonModule, FormsModule, RouterModule],
  templateUrl: './home-notebooks.component.html',
  styleUrl: './home-notebooks.component.css'
})
export class HomeNotebooksComponent {
  @Input('notebooksForChild') notebooks: Notebook[] = []
  @Input('activateNotebook') activeNotebook: string = ''
  @Output() notesTitleChangeEvent = new EventEmitter<Notebook>()
  @Output() addNoteBookEvent = new EventEmitter()
  @Output() changedNoteBookNameEvent = new EventEmitter<Notebook>()
  @Output() deleteNoteBookEvent = new EventEmitter<number>()
  editing = new Array(this.notebooks.length).fill(false);
  showListFlag = false;
  listPositionX: number = 0;
  listPositionY: number = 0;
  selectedNoteBookIndex: number = -1;
  notebook: Notebook | undefined

  ngOnInit(){
    // this.notebookActivate()
  }

  // notebookActivate(): void{
  //   if(this.activeNotebook){
  //     this.notebook = this.notebooks.find(notebook => notebook.id === this.activeNotebook);
  //     this.selectedNoteBookIndex = this.notebook?.id
  //   }
  // }

  setNoteParentTitle(type: string, index: number): void{
    if(type == "notebook"){
      this.notesTitleChangeEvent.emit(this.notebooks[index]);
    }
  }

  emitAddNoteBookEvent(): void{
    this.addNoteBookEvent.emit();
  }

  deleteNoteBook(index: number): void{
    this.deleteNoteBookEvent.emit(index)
  }

  toggleEdit(index: number) {
    //send the edited info to the parent
    setTimeout(() => {
      this.editing[index] = !this.editing[index];
      if (!this.editing[index]) {
          this.changedNoteBookNameEvent.emit(this.notebooks[index]);
      }
    });
  }

  getRouteId(index: number): string{
    return this.notebooks[index].id
  }
  
  showList(event: MouseEvent) {
    event.preventDefault(); // Prevent the default right-click context menu
    this.showListFlag = true;
    this.listPositionX = event.clientX;
    this.listPositionY = event.clientY;
  }

  setSelectedNoteBookIndex(index: number): void{
    this.selectedNoteBookIndex = index
    console.log(this.selectedNoteBookIndex)
  }

  hideList() {
    this.showListFlag = false;
  }
}
