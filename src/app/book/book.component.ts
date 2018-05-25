import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IBook } from '../interfaces/IBook';
import{MainComponent} from '../main/main.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  constructor() { }

  ngOnInit() {
  }

}
