import { Component} from '@angular/core';
import { FlashcardList } from '../shared/flashcardList.model';


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

}
