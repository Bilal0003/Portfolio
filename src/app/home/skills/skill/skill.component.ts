import { Component, Input } from '@angular/core';
import { ISkill } from '../skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})

export class SkillComponent {
  @Input() skill: any;

  getSkillName(skill: ISkill){
    return skill.SkillName;
  }

  getSkillContent(skill: ISkill){
    return skill.SkillContent;
  }
}
