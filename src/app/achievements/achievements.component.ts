import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from './achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css', '../shared/styles.css']
})
export class AchievementsComponent implements OnInit {
  achievements = ACHIEVEMENTS;

  constructor() { }

  ngOnInit() {
  }

}
