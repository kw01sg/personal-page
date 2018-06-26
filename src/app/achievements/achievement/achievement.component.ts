import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css', '../../shared/styles.css']
})
export class AchievementComponent implements OnInit {
  @Input() achievementHeader: string;
  @Input() achievementPeriod: string;
  @Input() achievementImage: {
    path: string,
    alt: string,
    isPadImage: boolean
  };
  @Input() achievementContent: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
