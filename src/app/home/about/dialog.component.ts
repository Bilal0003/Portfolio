import {
  Component,
  ElementRef,
  input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { log } from 'console';
import { text } from 'stream/consumers';

@Component({
  selector: 'spartan-dialog-preview',
  standalone: true,
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
  ],
  template: `
    <hlm-dialog>
      <button id="edit-profile" brnDialogTrigger hlmBtn>Contact</button>
      <hlm-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
        <hlm-dialog-header>
          <h3 hlmDialogTitle>Contact</h3>
          <p hlmDialogDescription>Je suis joinable sur l'addresse suivante</p>
        </hlm-dialog-header>
        <div class="py-4 grid gap-4">
          <div class="items-center grid grid-cols-4 gap-4">
            <label hlmLabel for="name" class="text-right">Email</label>
            <input
              hlmInput
              #MyInput
              id="name"
              class="col-span-3"
              [value]="'bilal.elhamdaoui21@gmail.com'"
            />
          </div>
          <button id="copy-button" (click)="CopyToCB()" hlmBtn>
            {{ buttonLabel }}
          </button>
        </div>
      </hlm-dialog-content>
    </hlm-dialog>
  `,
})
export class DialogPreviewComponent {
  @ViewChild('MyInput') textField!: ElementRef;
  @ViewChild('Mybtn') Button!: ElementRef;
  buttonLabel?: String;

  constructor(private renderer: Renderer2) {
    this.buttonLabel = 'Copier';
  }

  CopyToCB() {
    const InputEle = this.textField.nativeElement;
    navigator.clipboard.writeText(InputEle.value);

    this.buttonLabel = 'Copié aux Presse-Papiers ✔';
    setTimeout(() => {
      this.buttonLabel = 'Copier';
    }, 2000);
  }

  FeedBack() {
    const ButtonEle = this.Button.nativeElement;

    ButtonEle;
  }
}
