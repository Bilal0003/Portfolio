import { Component } from '@angular/core';
import { ProjectComponent } from "../../home/projects/project/project.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-complete-apps',
  standalone: true,
  imports: [ProjectComponent, NgFor],
  templateUrl: './complete-apps.component.html',
  styleUrl: './complete-apps.component.css'
})
export class CompleteAppsComponent {
  CompleteProjects: any;

  constructor(){
    this.CompleteProjects = [
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
       },
       {
        ProjectImage : "/assets/visualiser.png",
        languages : "JS CSS HTML",
        name : "Sorting Visualizer",
        description : "Développement d'un visualiseur web interactif permettant aux utilisateurs de visualiser en temps réel divers algorithmes de tri."
       },
       {
        ProjectImage: "/assets/hubbard.png",
        languages: "Python Flask",
        name: "Simulation of The Hubbard model",
        description: "A visualiser of the sub atomique interactions when interferences is taking into account"
       },
       {
        ProjectImage: "/assets/Duffing.png",
        languages: "Matlab Python",
        name: "The Duffing Oscillator",
        description: "A visualistion of the chaotic behavior of the duffing oscillator"
       }
    ]
  }
}
