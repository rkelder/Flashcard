import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from 'src/app/shared/flashcard.model';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcard-display-item',
  templateUrl: './flashcard-display-item.component.html',
  styleUrls: ['./flashcard-display-item.component.scss'],
})
export class FlashcardDisplayItemComponent implements OnInit {
  @Input() flashcardlist: FlashcardList;

  @Input() flashcard: Flashcard

  constructor() {}

  ngOnInit() {}
}
