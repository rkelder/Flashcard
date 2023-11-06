import { Component, OnInit } from '@angular/core';
import { FlashcardList } from '../../shared/flashcardList.model';

@Component({
  selector: 'app-flashcard-lists',
  templateUrl: './flashcard-lists.component.html',
  styleUrls: ['./flashcard-lists.component.scss'],
})
export class FlashcardListsComponent implements OnInit {
  flashcardlists: FlashcardList[] = [
    new FlashcardList(
      'List 1',
      'This is the description of the first list',
      1,
      []
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
