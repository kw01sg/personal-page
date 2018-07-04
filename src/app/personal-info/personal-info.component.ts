import { Component, OnInit } from '@angular/core';
import { PageNavItem } from '../page-header/page-nav/page-nav-item.model';
import { PERSONAL_INFO_NAV_LINKS } from './personal-info-nav-links';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css', '../shared/styles.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoNavItems: PageNavItem[];

  constructor() { }

  ngOnInit() {
    this.personalInfoNavItems = PERSONAL_INFO_NAV_LINKS;
  }

}
