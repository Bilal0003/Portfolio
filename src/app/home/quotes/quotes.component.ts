import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css',
})
export class QuotesComponent {
  constructor(private quotesSvc: QuotesService) {}

  ngOnInit() {
    let QuotesObservable = this.quotesSvc.getQuotes();

    let QuotesData = QuotesObservable.subscribe((quote) => {
      console.log(quote);
    });

    console.log('quotes component initialized.');
  }
}
