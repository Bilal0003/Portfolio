import { NgFor } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';

import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from '@spartan-ng/ui-carousel-helm';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'spartan-carousel-preview',
  standalone: true,
  styleUrl: 'quotes.component.css',
  imports: [
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    NgFor,
  ],
  template: `
    <div class="quote-parent flex items-center justify-center  max-w-790px p-4">
      <hlm-carousel class="w-auto max-w-790px">
        <hlm-carousel-content>
          <hlm-carousel-item *ngFor="let quote of QoD; index as i">
            <section hlmCard>
              <!--  -->
              <p hlmCardContent class="w-auto max-w-790px">
                <span class="with-great-power w-auto">{{ quote.q }}</span>
              </p>
              <!--  -->

              <!--  -->
            </section>
          </hlm-carousel-item>
        </hlm-carousel-content>
        <button hlm-carousel-previous (click)="updateAuthorDecr()"></button>
        <button hlm-carousel-next (click)="updateAuthorIncr()"></button>
      </hlm-carousel>
    </div>
  `,
})
export class CarouselPreviewComponent {
  @Input() QoD!: any[];
  public constructor(private renderer: Renderer2) {}
  private authorDiv: any;
  private i = 0;
  private curr = 0;

  updateAuthorIncr() {
    this.authorDiv = this.renderer.selectRootElement('.dr-who');
    if (this.curr >= 0 && this.curr < 5) {
      this.curr += 1;
      this.authorDiv.innerText = this.QoD[this.curr].a;
    }
  }

  updateAuthorDecr() {
    this.authorDiv = this.renderer.selectRootElement('.dr-who');
    if (this.curr > 0 && this.curr <= 5) {
      this.curr -= 1;
      this.authorDiv.innerText = this.QoD[this.curr].a;
    }
  }
}
