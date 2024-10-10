import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { AnySoaRecord } from 'dns';
import { NgFor } from '@angular/common';
import { ISkill } from './skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: ISkill[];

  constructor() {
    this.skills = [
      {
        SkillName: 'Languages',
        SkillContent: 'TypeScript Lua Python JavaScript Bash',
      },
      {
        SkillName: 'Databases',
        SkillContent: 'PostgreSQL ElastiSearch MangoDB',
      },
      {
        SkillName: 'Tools',
        SkillContent: 'VSCode JupyterNotebook Linux Figma Git Docker Postman',
      },
      {
        SkillName: 'Other',
        SkillContent: 'HTML CSS APIRest',
      },
      {
        SkillName: 'Frameworks',
        SkillContent: 'Flask Angular Springboot 3',
      },
    ];
  }
}
