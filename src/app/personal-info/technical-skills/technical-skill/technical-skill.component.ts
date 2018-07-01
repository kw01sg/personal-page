import { Component, OnInit, Input } from '@angular/core';
import { TechnicalSkill } from '../technical-skill.model';

@Component({
  selector: 'app-technical-skill',
  templateUrl: './technical-skill.component.html',
  styleUrls: ['./technical-skill.component.css', '../../../shared/styles.css']
})
export class TechnicalSkillComponent implements OnInit {
  @Input() technicalSkill: TechnicalSkill;
  
  constructor() { }

  ngOnInit() {
  }

}
