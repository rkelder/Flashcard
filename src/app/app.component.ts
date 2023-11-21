import { Component } from '@angular/core';
import { FlashcardlistService } from './flashcardlist-edit/flashcardlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlashcardlistService],
})
export class AppComponent {
  loadedFeature = 'flashcards';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
