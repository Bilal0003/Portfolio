import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnHoverCardModule } from '@spartan-ng/ui-hovercard-brain';
import { HlmHoverCardModule } from '@spartan-ng/ui-hovercard-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'spartan-hover-card-preview',
  standalone: true,
  imports: [
    BrnHoverCardModule,
    HlmHoverCardModule,
    HlmButtonDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideCalendar })],
  template: `
    <brn-hover-card>
      <button
        brnHoverCardTrigger
        style="font-style: italic; text-decoration:underline"
      >
        Quotes of The Day
      </button>
      <hlm-hover-card-content *brnHoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">&#64;ZenQuotes</h4>
            Inspirational quotes provided by
            <a
              href="https://zenquotes.io/"
              target="_blank"
              style="text-decoration: underline;"
              >ZenQuotes API</a
            >
            <div class="flex items-center pt-2">
              <hlm-icon name="lucideCalendar" class="w-4 h-4 mr-2 opacity-70" />
              <span class="text-xs text-muted-foreground"
                >Using free version (max 5 requests per 30 secs)</span
              >
            </div>
          </div>
        </div>
      </hlm-hover-card-content>
    </brn-hover-card>
  `,
})
export class HoverCardPreviewComponent {}
