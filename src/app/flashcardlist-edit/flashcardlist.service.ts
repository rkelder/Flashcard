import { EventEmitter } from '@angular/core';

import { FlashcardList } from '../shared/flashcardList.model';
import { Flashcard } from '../shared/flashcard.model';

export class FlashcardlistService {
  flashcardlistChanged = new EventEmitter<FlashcardList[]>();

  flashcardlistSelected = new EventEmitter<FlashcardList>();

  flashcardlists: FlashcardList[] = [
    new FlashcardList('Korean Vocabulary', 'Beginner Korean, Volume 1', 1, [
      new Flashcard(1, '안녕하세요', 'Hello'),
      new Flashcard(2, '안녕히가세요', 'Goodbye (staying)'),
      new Flashcard(2, '안녕히계세요', 'Goodbye (leaving)'),
      new Flashcard(2, '잘 먹겠습니다', 'Have a nice meal'),
      new Flashcard(2, '맛있게 드세요 ', 'Have a nice meal (honorific)'),
    ]),
    new FlashcardList('List 2', 'This is the second list', 2, [
      new Flashcard(1, 'Bonjour', 'World'),
      new Flashcard(2, 'Au Revoir', 'World'),
    ]),
    new FlashcardList('List 3', 'This is the third list', 3, [
      new Flashcard(1, 'Hallo', 'World'),
      new Flashcard(2, 'Auf Wiedersehen', 'World'),
    ]),
    new FlashcardList('List 4', 'This is the fourth list', 4, [
      new Flashcard(1, 'Hallo', 'World'),
      new Flashcard(2, 'Tot ziens', 'World'),
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

