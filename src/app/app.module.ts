import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardListOverviewComponent } from './flashcard-list-overview/flashcard-list-overview.component';
import { FlashcardComponent } from './flashcards/flashcard/flashcard.component';
import { FlashcardDisplayComponent } from './flashcards/flashcard-display/flashcard-display.component';
import { FlashcardListsComponent } from './flashcard-list-overview/flashcard-lists/flashcard-lists.component';
import { FlashcardListDetailComponent } from './flashcard-list-overview/flashcard-list-detail/flashcard-list-detail.component';
import { FlashcardListItemComponent } from './flashcard-list-overview/flashcard-lists/flashcard-list-item/flashcard-list-item.component';
import { FlashcardListSelectComponent } from './flashcards/flashcard-list-select/flashcard-list-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardsComponent,
    FlashcardListOverviewComponent,
    FlashcardComponent,
    FlashcardDisplayComponent,
    FlashcardListsComponent,
    FlashcardListDetailComponent,
    FlashcardListItemComponent,
    FlashcardListSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
