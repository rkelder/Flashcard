import { EventEmitter } from '@angular/core';

import { FlashcardList } from '../shared/flashcardList.model';
import { Flashcard } from '../shared/flashcard.model';

export class FlashcardlistService {
  flashcardlistChanged = new EventEmitter<FlashcardList[]>();

  flashcardlistSelected = new EventEmitter<FlashcardList>();

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

  getFlashcardLists() {
    return this.flashcardlists.slice();
  }

  addFlashcardList(flashcardlist: FlashcardList) {
    this.flashcardlists.push(flashcardlist);
    this.flashcardlistChanged.emit(this.flashcardlists.slice());
    console.log(this.flashcardlists);
  }
}
