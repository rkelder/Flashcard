import { Component, OnInit } from '@angular/core';
import { FlashcardList } from 'src/app/flashcard-list-overview/flashcardList.model';
FlashcardList

@Component({
  selector: 'app-flashcard-list-select',
  templateUrl: './flashcard-list-select.component.html',
  styleUrls: ['./flashcard-list-select.component.scss'],
})
export class FlashcardListSelectComponent implements OnInit {
  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, []),
  ];

  constructor() {}

  ngOnInit() {}
}
