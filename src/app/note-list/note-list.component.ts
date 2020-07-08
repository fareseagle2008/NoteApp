import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  note:string;
  notes: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNote(){
    this.notes.push(this.note);
    this.note = "";

  }

  deleteNote(noteToDelete: string){
    const indexOfNoteToDelete = this.notes.indexOf(noteToDelete);
    this.notes.splice(indexOfNoteToDelete, 1);
  }

}
