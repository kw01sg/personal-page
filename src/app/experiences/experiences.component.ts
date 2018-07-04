import { Component, OnInit } from '@angular/core';

import { Experience } from './experience/experience.model';
import { EXPERIENCES } from './experiences';
import { PageNavItem } from '../page-header/page-nav/page-nav-item.model';
import { EXPERIENCE_NAV_LINKS } from './experience-nav-links';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css', '../shared/styles.css']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = EXPERIENCES;
  experiencesNavItems: PageNavItem[];
  constructor() { }

  ngOnInit() {
    this.experiences = EXPERIENCES;
    this.experiencesNavItems = EXPERIENCE_NAV_LINKS;
  }
}
