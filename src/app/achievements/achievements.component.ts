import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from './achievements';
import { PageNavItem } from '../page-header/page-nav/page-nav-item.model';
import { Achievement } from './achievement/achievement.model';
import { ACHIEVEMENT_NAV_LINKS } from './achievement-nav-links';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css', '../shared/styles.css']
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[];
  achievementsNavItems: PageNavItem[];
  constructor() { }

  ngOnInit() {
    this.achievements = ACHIEVEMENTS;
    this.achievementsNavItems = ACHIEVEMENT_NAV_LINKS;
  }

}
