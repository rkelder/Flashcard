import { Component, OnInit } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { Flashcard } from 'src/app/shared/flashcard.model';

@Component({
  selector: 'app-flashcard-list-select',
  templateUrl: './flashcard-list-select.component.html',
  styleUrls: ['./flashcard-list-select.component.scss'],
})
export class FlashcardListSelectComponent implements OnInit {
  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
  ];

  constructor() {}

  ngOnInit() {}
}
