import { Component, OnInit } from '@angular/core';
import { FlashcardList } from '../../shared/flashcardList.model';

@Component({
  selector: 'app-flashcard-list-detail',
  templateUrl: './flashcard-list-detail.component.html',
  styleUrls: ['./flashcard-list-detail.component.scss'],
})
export class FlashcardListDetailComponent implements OnInit {
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
