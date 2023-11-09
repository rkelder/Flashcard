import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcardlist-add',
  templateUrl: './flashcardlist-add.component.html',
  styleUrls: ['./flashcardlist-add.component.scss'],
})
export class FlashcardlistAddComponent {
  flashcardlistName: string;
  flashcardlistDescription: string;

  addSelected = false;
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('descriptionInput') descriptionInputReference: ElementRef;


  onSelect() {
    this.addSelected = !this.addSelected;
  }

}
