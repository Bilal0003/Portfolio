import { Component, Input, output, Renderer2 } from '@angular/core';
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
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: IProject[];

  constructor(private router: Router, private renderer: Renderer2) {
    this.projects = this.select3randomProjects();
  }

  NavToWorks() {
    this.router.navigate(['/works']).then(() => {
      setTimeout(() => window.scrollTo(0, 0), 50);
      setTimeout(() => {
        const element = this.renderer.selectRootElement('#complete', true);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  }

  select3randomProjects() {
    const projects: IProject[] = [
      {
        ProjectImage: './assets/ChertNodes.png',
        languages: 'HTML SCSS Python Flask',
        name: 'ChertNodes',
        description: 'Minecraft severs hosting',
        route: '/works/chertnodes',
      },
      {
        ProjectImage: './assets/ProtectX.png',
        languages: 'React Express Discord.js Node.js HTML SCSS Python Flask',
        name: 'ProtectX',
        description: 'Discord anti-crash bot',
        route: '/works/projectx',
      },
      {
        ProjectImage: './assets/Kahoot.png',
        languages: 'CSS Express Node.js',
        name: 'Kahoot Answers Viewer',
        description: 'Get asnwers to your kahoot quiz',
        route: '/works/kahoot',
      },
      {
        ProjectImage: './assets/visualiser.png',
        languages: 'JS CSS HTML',
        name: 'Sorting Visualizer',
        description:
          "Développement d'un visualiseur web interactif permettant aux utilisateurs de visualiser en temps réel divers algorithmes de tri.",
        route: '/works/sorting-visualiser',
      },
      {
        ProjectImage: './assets/hubbard.png',
        languages: 'Python Flask',
        name: 'Simulation of The Hubbard model',
        description:
          'A visualiser of the sub atomique interactions when interferences is taking into account',
        route: '/works/hubbard',
      },
      {
        ProjectImage: './assets/Duffing.png',
        languages: 'Matlab Python',
        name: 'The Duffing Oscillator',
        description:
          'A visualistion of the chaotic behavior of the duffing oscillator',
        route: '/works/duffing',
      },
    ];

    const usedIDXs: number[] = [];

    for (let i = 0; i < projects.length; i++) {
      const randIDX = Math.floor(Math.random() * projects.length);
      if (!usedIDXs.includes(randIDX)) {
        usedIDXs.push(randIDX);
      }
    }

    return [
      projects[usedIDXs[0]],
      projects[usedIDXs[1]],
      projects[usedIDXs[2]],
    ];
  }

  navToProject(project: IProject){
    this.router.navigate([project.route]);
  }
}
