import { Component, Input } from '@angular/core';
import { ISmall } from '../small.model';

@Component({
  selector: 'app-small',
  standalone: true,
  imports: [],
  templateUrl: './small.component.html',
  styleUrl: './small.component.css'
})


export class SmallComponent {
  @Input() small!: ISmall;


}
