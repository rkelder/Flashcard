import { Component, OnInit, Input } from '@angular/core';
import { FlashcardList } from 'src/app/shared/flashcardList.model';

@Component({
  selector: 'app-flashcardlist-manage',
  templateUrl: './flashcardlist-manage.component.html',
  styleUrls: ['./flashcardlist-manage.component.scss'],
})
export class FlashcardlistManageComponent implements OnInit {
  @Input() flashcardlist: FlashcardList

  constructor() {}

  ngOnInit() {}
}
