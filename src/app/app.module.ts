import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';
import { FlashcardAddComponent } from './flashcard-edit/flashcardlist-display1/flashcard-add/flashcard-add.component';
import { RehearseComponent } from './rehearse/rehearse.component';
import { FlashcardlistEditComponent } from './flashcardlist-edit/flashcardlist-edit.component';
import { FlashcardlistItemComponent } from './flashcardlist-edit/flashcardlist-display2/flashcardlist-item/flashcardlist-item.component';
import { FlashcardlistAddComponent } from './flashcardlist-edit/flashcardlist-add/flashcardlist-add.component';
import { FlashcardlistManageComponent } from './flashcardlist-edit/flashcardlist-manage/flashcardlist-manage.component';
import { FlashcardlistDisplay2Component } from './flashcardlist-edit/flashcardlist-display2/flashcardlist-display2.component';
import { FlashcardlistDisplay1Component } from './flashcard-edit/flashcardlist-display1/flashcardlist-display1.component';
import { FlashcardDisplayItemComponent } from './flashcard-edit/flashcardlist-display1/flashcard-display-item/flashcard-display-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlashcardEditComponent,
    FlashcardAddComponent,
    RehearseComponent,
    FlashcardlistEditComponent,
    FlashcardlistItemComponent,
    FlashcardlistAddComponent,
    FlashcardlistManageComponent,
    FlashcardlistDisplay2Component,
    FlashcardlistDisplay1Component,
    FlashcardDisplayItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
