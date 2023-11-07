import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';
import { FlashcardComponent } from './flashcard-edit/flashcard/flashcard.component';
import { FlashcardListSelectComponent } from './flashcard-edit/flashcard-list-select/flashcard-list-select.component';
import { RehearseComponent } from './rehearse/rehearse.component';
import { FlashcardlistEditComponent } from './flashcardlist-edit/flashcardlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardEditComponent,
    FlashcardComponent,
    FlashcardListSelectComponent,
    RehearseComponent,
    FlashcardlistEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
