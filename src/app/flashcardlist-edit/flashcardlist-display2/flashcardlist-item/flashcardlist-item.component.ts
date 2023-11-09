import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcardlist-item',
  templateUrl: './flashcardlist-item.component.html',
  styleUrls: ['./flashcardlist-item.component.scss'],
})
export class FlashcardlistItemComponent implements OnInit {
  @Input() flashcardlist: FlashcardList;

  @Output() flashcardlistSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.flashcardlistSelected.emit();
  }
}
