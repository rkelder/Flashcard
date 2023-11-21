// flashcard.service.ts
import { Injectable } from '@angular/core';
import { Flashcard } from '../shared/flashcard.model';

@Injectable({
  providedIn: 'root'
})

export class FlashcardService {
  private flashcards: Flashcard[] = [];

  constructor() {

  }

  getAllFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  getFlashcard(index: number): Flashcard | null {
    return this.flashcards[index] || null;
  }

}

export interface FlashcardInterface {
  term: string;
  meaning: string;
}

 