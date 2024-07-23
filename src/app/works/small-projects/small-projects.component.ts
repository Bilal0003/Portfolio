import { Component } from '@angular/core';
import { SmallComponent } from './small/small.component';
import { ISmall } from './small.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-small-projects',
  standalone: true,
  imports: [SmallComponent, NgFor],
  templateUrl: './small-projects.component.html',
  styleUrl: './small-projects.component.css'
})

export class SmallProjectsComponent {
  ListMiniProjects: ISmall[];

  constructor(){
    this.ListMiniProjects=[
      { languages: 'Java',
        title: 'Robots World',
        description: 'An interactive 2D world, where cleaning robots and garbage robots can exist'
      }
    ]
  }
}
