import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flashcard-add',
  templateUrl: './flashcard-add.component.html',
  styleUrls: ['./flashcard-add.component.scss'],
})
export class FlashcardAddComponent {
  @Output() flashcardAdded = new EventEmitter<{
    question: string;
    answer: string;
  }>();

  question: string = '';
  answer: string = '';

  onAddFlashcard() {
    if (this.question && this.answer) {
      this.flashcardAdded.emit({
        question: this.question,
        answer: this.answer,
      });
      // Optionally, you can reset the input fields after adding a flashcard
      this.question = '';
      this.answer = '';
      console.log('Flashcard added :' + this.question + this.answer);
    }
  }
}
