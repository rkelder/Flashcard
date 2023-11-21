import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';
import { FlashcardlistService } from 'src/app/flashcardlist-edit/flashcardlist.service';

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

  constructor(private flashcardlistService: FlashcardlistService) {}

  onAddFlashcardlist() {
    // Get values from input fields
    const name = this.nameInputReference.nativeElement.value;
    const description = this.descriptionInputReference.nativeElement.value;

    // Create a new FlashcardList instance
    const newFlashcardList = new FlashcardList(name, description, 0, []);

    // Add the new flashcard list to the service
    this.flashcardlistService.addFlashcardList(newFlashcardList);

    // Reset form or perform any other necessary actions
    this.addSelected = false;
  }
}
