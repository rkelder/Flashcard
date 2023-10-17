import { Component, OnInit } from '@angular/core';
import { FlashcardList } from '../flashcardList.model';
FlashcardList

@Component({
  selector: 'app-flashcard-lists',
  templateUrl: './flashcard-lists.component.html',
  styleUrls: ['./flashcard-lists.component.scss']
})
export class FlashcardListsComponent implements OnInit {

  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, []),
  ]
  
  constructor() { }

  ngOnInit() {
  }


}
