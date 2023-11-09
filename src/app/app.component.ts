import { Component } from '@angular/core';
import { FlashcardlistService } from './shared/flashcardlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlashcardlistService],
})
export class AppComponent {
  loadedFeature = 'flashcardlists';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
