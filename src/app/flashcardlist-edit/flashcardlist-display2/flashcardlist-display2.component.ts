import { Component, OnInit } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { FlashcardlistService } from 'src/app/flashcardlist-edit/flashcardlist.service';

@Component({
  selector: 'app-flashcardlist-display2',
  templateUrl: './flashcardlist-display2.component.html',
  styleUrls: ['./flashcardlist-display2.component.scss'],
})
export class FlashcardlistDisplay2Component implements OnInit {
  flashcardlists: FlashcardList[];

  constructor(private flashcardlistService: FlashcardlistService) {}

  ngOnInit() {
    this.flashcardlists = this.flashcardlistService.getFlashcardLists();
    this.flashcardlistService.flashcardlistChanged.subscribe(
      (subscribedflashcardlists: FlashcardList[]) => {
        this.flashcardlists = subscribedflashcardlists;
      }
    );
  }
}
