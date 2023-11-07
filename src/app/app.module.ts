import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';
import { FlashcardComponent } from './flashcard-edit/flashcard/flashcard.component';
import { FlashcardListSelectComponent } from './flashcard-edit/flashcard-list-select/flashcard-list-select.component';
import { RehearseComponent } from './rehearse/rehearse.component';
import { FlashcardlistEditComponent } from './flashcardlist-edit/flashcardlist-edit.component';
import { FlashcardlistItemComponent } from './flashcard-edit/flashcard-list-select/flashcardlist-item/flashcardlist-item.component';
import { FlashcardlistAddComponent } from './flashcardlist-edit/flashcardlist-add/flashcardlist-add.component';
import { FlashcardlistManageComponent } from './flashcardlist-edit/flashcardlist-manage/flashcardlist-manage.component';
import { FlashcardlistDisplayComponent } from './flashcardlist-edit/flashcardlist-display/flashcardlist-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardEditComponent,
    FlashcardComponent,
    FlashcardListSelectComponent,
    RehearseComponent,
    FlashcardlistEditComponent,
    FlashcardlistItemComponent,
    FlashcardlistAddComponent,
    FlashcardlistManageComponent,
    FlashcardlistDisplayComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
