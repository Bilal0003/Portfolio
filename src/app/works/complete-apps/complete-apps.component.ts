import { Component, Query, OnInit } from '@angular/core';
import { ProjectComponent } from "../../home/projects/project/project.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute, QueryParamsHandling, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { IProject } from '../../home/projects/project.model';

@Component({
  selector: 'app-complete-apps',
  standalone: true,
  imports: [ProjectComponent, NgFor, RouterModule,],
  templateUrl: './complete-apps.component.html',
  styleUrl: './complete-apps.component.css'
})

export class CompleteAppsComponent {
  CompleteProjects: any;

  constructor(private router: Router) {
    this.CompleteProjects = [
      {ProjectImage: "/assets/ChertNodes.png",
        languages: "HTML SCSS Python Flask",
        name: "ChertNodes",
        description: "Minecraft severs hosting",
        route: '/works/project/chertnodes'
  
       }, {ProjectImage: "/assets/ProtectX.png",
        languages: "React Express Discord.js Node.js HTML SCSS Python Flask",
        name: "ProtectX",
        description: "Discord anti-crash bot",
        route: '/works/project/projectx'
  
       } , {ProjectImage: "/assets/Kahoot.png",
        languages: "CSS Express Node.js",
        name: "Kahoot Answers Viewer",
        description: "Get asnwers to your kahoot quiz",
        route: '/works/project/kahoot'
       },
       {
        ProjectImage : "/assets/visualiser.png",
        languages : "JS CSS HTML",
        name : "Sorting Visualizer",
        description : "Développement d'un visualiseur web interactif permettant aux utilisateurs de visualiser en temps réel divers algorithmes de tri.",
        route: '/works/project/sorting-visualiser'
       },
       {
        ProjectImage: "/assets/hubbard.png",
        languages: "Python Flask",
        name: "Simulation of The Hubbard model",
        description: "A visualiser of the sub atomique interactions when interferences is taking into account",
        route: '/works/project/hubbard'
       },
       {
        ProjectImage: "/assets/Duffing.png",
        languages: "Matlab Python",
        name: "The Duffing Oscillator",
        description: "A visualistion of the chaotic behavior of the duffing oscillator",
        route: '/works/project/duffing'
       }
    ]
  }

  projects = [
    { id: 'sorting-visualiser', name: 'Sorting Visualiser', route: '/works/project/sorting-visualiser' }
  ]

  ngOnInit() {
    //this.router.navigate(['/works/project/sorting-visualiser'])
  }

  NavToProject(project: any) {
    this.router.navigate([project.route])
  }
 
}
