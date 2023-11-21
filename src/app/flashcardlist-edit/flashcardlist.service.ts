import { EventEmitter } from '@angular/core';

import { FlashcardList } from '../shared/flashcardList.model';
import { Flashcard } from '../shared/flashcard.model';

export class FlashcardlistService {
  flashcardlistChanged = new EventEmitter<FlashcardList[]>();

  flashcardlistSelected = new EventEmitter<FlashcardList>();

  flashcardlists: FlashcardList[] = [
    new FlashcardList('Korean Vocabulary', 'Beginner Korean, Volume 1', 1, [
      new Flashcard(1, '안녕하세요', 'Hello', 1),
      new Flashcard(2, '안녕히가세요', 'Goodbye (staying)', 1),
      new Flashcard(3, '안녕히계세요', 'Goodbye (leaving)', 1),
      new Flashcard(4, '잘 먹겠습니다', 'Have a nice meal', 1),
      new Flashcard(5, '맛있게 드세요 ', 'Have a nice meal (honorific)', 1),
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

  
  addFlashcardToFlashcardList(index: number, flashcard: Flashcard) {
    if (index >= 0 && index < this.flashcardlists.length) {
      this.flashcardlists[index].flashcards.push(flashcard);
      this.flashcardlistChanged.emit(this.flashcardlists.slice());
  }
}
}