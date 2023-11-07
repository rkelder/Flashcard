import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-flashcardlist-add',
  templateUrl: './flashcardlist-add.component.html',
  styleUrls: ['./flashcardlist-add.component.scss']
})
export class FlashcardlistAddComponent {

addSelected = false

  onSelect() {
    this.addSelected = !this.addSelected;
  }
}
