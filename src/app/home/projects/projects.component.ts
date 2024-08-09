import { Component, Input, output } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { NgFor } from '@angular/common';
import { IProject } from './project.model';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, NgFor, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: IProject[];

  constructor(private router: Router){
    this.projects=[
     {ProjectImage: "./assets/ChertNodes.png",
      languages: "HTML SCSS Python Flask",
      name: "ChertNodes",
      description: "Minecraft severs hosting"

     }, {ProjectImage: "./assets/ProtectX.png",
      languages: "React Express Discord.js Node.js HTML SCSS Python Flask",
      name: "ProtectX",
      description: "Discord anti-crash bot"

     } , {ProjectImage: "./assets/Kahoot.png",
      languages: "CSS Express Node.js",
      name: "Kahoot Answers Viewer",
      description: "Get asnwers to your kahoot quiz"
     }

    ]; 
  }

  NavToWorks(){
    this.router.navigate(['/works']).then( () => {
      setTimeout( () => window.scrollTo(0, 0), 50);

      setTimeout( () =>{const element = document.getElementById('complete');
      if (element) {
        element.scrollIntoView( {behavior: 'smooth'} );
      }}, 300);
    });
  }
  
}
