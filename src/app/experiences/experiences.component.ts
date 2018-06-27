import { Component, OnInit } from '@angular/core';
import { Experience } from './experience/experience.model';
import { EXPERIENCES } from './experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css', '../shared/styles.css']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = EXPERIENCES;
  constructor() { }

  ngOnInit() {
  }

}
