import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';
import { NgFor } from '@angular/common';
import { HoverCardPreviewComponent } from './hover.component';
import { CarouselPreviewComponent } from './carousel.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [HoverCardPreviewComponent, CarouselPreviewComponent, NgFor],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css',
})
export class QuotesComponent implements OnInit {
  public QoD: any[] = [];

  constructor(private quotesSvc: QuotesService) {}

  ngOnInit() {
    let QuotesObservable = this.quotesSvc.getQuotes();
    QuotesObservable.subscribe((quote) => {
      for (let i = 0; i < 6; i++) {
        this.QoD.push(quote[i]);
      }
    });
  }
}
