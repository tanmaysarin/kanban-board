import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{

  constructor() {}

  // Set Up the Board
  // Imported Board from app/models
  board: Board =  new Board('Test Board', [
    // Imported columns from app/models
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "This is an awesome application",
    ]),

    new Column('Research', [
      "Lorem Ipsum",
      "foo",
      "This was in Research column originaly",
    ]),

    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
    ]),

    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ])

  ngOnInit(): void {}

  // Importing the Drag and Drop function from the @angular/cdk library
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // When moving Items within the same container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        // When moving items to a different container
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
