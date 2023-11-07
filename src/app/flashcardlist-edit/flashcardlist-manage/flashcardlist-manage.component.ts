import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/flashcard.model';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcardlist-manage',
  templateUrl: './flashcardlist-manage.component.html',
  styleUrls: ['./flashcardlist-manage.component.scss'],
})
export class FlashcardlistManageComponent implements OnInit {
  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
    new FlashcardList('List 2', 'This is the second list', 2, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
  ];

  constructor() {}

  ngOnInit() {}
}
