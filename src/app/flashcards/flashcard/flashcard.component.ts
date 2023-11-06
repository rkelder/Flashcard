import { Component } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { Flashcard } from 'src/app/shared/flashcard.model';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent {
  flashcardlists: FlashcardList[] = [
    new FlashcardList('List 1', 'This is the first list', 1, [
      new Flashcard(1, 'Hello', 'World'),
      new Flashcard(2, 'Goodbye', 'World'),
    ]),
  ];
}
