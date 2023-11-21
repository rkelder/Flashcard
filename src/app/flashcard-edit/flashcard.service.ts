// flashcard.service.ts
import { Injectable } from '@angular/core';
import { Flashcard } from '../shared/flashcard.model';

@Injectable({
  providedIn: 'root'
})

export class FlashcardService {
  private flashcards: Flashcard[] = [];

  constructor() {
    // Initialize some dummy flashcards
    this.flashcards.push(new Flashcard( 1, 'What is the capital of Germany?', 'Berlin' ));
    this.flashcards.push(new Flashcard( 2, 'What is the capital of France?', 'Paris' ));
    // Add more flashcards as needed
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

 