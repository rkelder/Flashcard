import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardComponent } from './flashcards/flashcard/flashcard.component';
import { FlashcardListSelectComponent } from './flashcards/flashcard-list-select/flashcard-list-select.component';
import { RehearseComponent } from './rehearse/rehearse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardsComponent,
    FlashcardComponent,
    FlashcardListSelectComponent,
    RehearseComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
