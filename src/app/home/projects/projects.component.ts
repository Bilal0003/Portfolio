import { Component, Input, output } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:any;

  constructor(){
    this.projects=[
     {ProjectImage: "/assets/ChertNodes.png",
      languages: "HTML SCSS Python Flask",
      name: "ChertNodes",
      description: "Minecraft severs hosting"

     }, {ProjectImage: "/assets/ProtectX.png",
      languages: "React Express Discord.js Node.js HTML SCSS Python Flask",
      name: "ProtectX",
      description: "Discord anti-crash bot"

     } , {ProjectImage: "/assets/Kahoot.png",
      languages: "CSS Express Node.js",
      name: "Kahoot Answers Viewer",
      description: "Get asnwers to your kahoot quiz"
     }

    ]; 
  }
  
}
