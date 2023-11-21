import { Component, OnInit } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { FlashcardlistService } from 'src/app/flashcardlist-edit/flashcardlist.service';

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

  flashcardlists: FlashcardList[]

  constructor(private flashcardlistService: FlashcardlistService) {} 

  ngOnInit() {this.flashcardlists = this.flashcardlistService.getFlashcardLists();
    this.flashcardlistService.flashcardlistChanged.subscribe(
      (flashcardlists: FlashcardList[]) => {
        this.flashcardlists = flashcardlists;
      }
    );}
}
