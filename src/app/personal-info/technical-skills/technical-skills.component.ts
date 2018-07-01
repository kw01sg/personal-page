import { Component, OnInit } from '@angular/core';
import { TechnicalSkill } from './technical-skill.model';
import { TECHNICAL_SKILLS } from './technical-skills';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css', '../../shared/styles.css']
})
export class TechnicalSkillsComponent implements OnInit {
  technicalSkills: TechnicalSkill[] = TECHNICAL_SKILLS;
  constructor() { }

  ngOnInit() {
  }

}
