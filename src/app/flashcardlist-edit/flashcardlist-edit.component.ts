import { Component, OnInit } from '@angular/core';
import { FlashcardList } from '../shared/flashcardList.model';
import { FlashcardlistService } from '../shared/flashcardlist.service';

@Component({
  selector: 'app-flashcardlist-edit',
  templateUrl: './flashcardlist-edit.component.html',
  styleUrls: ['./flashcardlist-edit.component.scss'],
})
export class FlashcardlistEditComponent {
  flashcardlists: FlashcardList[] = [];

  selectedFlashcardlist: FlashcardList;

  onFlashcardlistSelected(flashcardlist: FlashcardList) {
    this.selectedFlashcardlist = flashcardlist;
  }

  constructor(private flashcardlistService: FlashcardlistService) {}

  ngOnInit() {
    this.flashcardlistService.flashcardlistSelected.subscribe(
      (flashcardlist: FlashcardList) => {
        this.selectedFlashcardlist = flashcardlist;
      }
    );
  }
}
