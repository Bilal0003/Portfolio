import { Component } from '@angular/core';
import { DialogPreviewComponent } from './dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DialogPreviewComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
