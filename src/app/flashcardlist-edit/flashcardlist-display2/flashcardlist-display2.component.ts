import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flashcard } from 'src/app/shared/flashcard.model';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcardlist-display2',
  templateUrl: './flashcardlist-display2.component.html',
  styleUrls: ['./flashcardlist-display2.component.scss'],
})
export class FlashcardlistDisplay2Component implements OnInit {
  @Output() flashcardlistWasSelected = new EventEmitter<FlashcardList>();

  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
    new FlashcardList('List 2', 'This is the second list', 2, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
    new FlashcardList('List 3', 'This is the third list', 3, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
  ];

  constructor() {}

  ngOnInit() {}

  onFlashcardlistSelected(flashcardlist: FlashcardList) {
    this.flashcardlistWasSelected.emit(flashcardlist);
  }
}
