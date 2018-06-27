import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from './achievement.model';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css', '../../shared/styles.css']
})
export class AchievementComponent implements OnInit {
  @Input() achievement: Achievement;

  constructor() { }

  ngOnInit() {
  }

}
