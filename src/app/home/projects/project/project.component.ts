import { Component, Input } from '@angular/core';
import { IProject } from '../project.model';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  
  @Input() project: any;
  
  constructor(){

  }

  getImageUrl(project: IProject){
    return project.ProjectImage;
  }
}
