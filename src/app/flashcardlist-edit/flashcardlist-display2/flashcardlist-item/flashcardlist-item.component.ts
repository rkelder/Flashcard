import { Component, OnInit, Input } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { FlashcardlistService } from 'src/app/shared/flashcardlist.service';

@Component({
  selector: 'app-flashcardlist-item',
  templateUrl: './flashcardlist-item.component.html',
  styleUrls: ['./flashcardlist-item.component.scss'],
})
export class FlashcardlistItemComponent implements OnInit {
  @Input() flashcardlist: FlashcardList;

  constructor(private flashcardlistService: FlashcardlistService) {}

  ngOnInit() {}

  onSelected() {
    this.flashcardlistService.flashcardlistSelected.emit(this.flashcardlist);
  }
}
