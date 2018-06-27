import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from './achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  private achievements = ACHIEVEMENTS;

  constructor() { }

  ngOnInit() {
  }

}
