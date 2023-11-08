import { Component } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { Flashcard } from 'src/app/shared/flashcard.model';

@Component({
  selector: 'app-flashcardlist-display1',
  templateUrl: './flashcardlist-display1.component.html',
  styleUrls: ['./flashcardlist-display1.component.scss'],
})
export class FlashcardlistDisplay1Component {
  selectedFlashcardlistIndex: number;
  
  get selectedFlashcardlist(): FlashcardList {
    return this.flashcardlists[this.selectedFlashcardlistIndex];
  }

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
}
