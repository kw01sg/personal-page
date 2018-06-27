import { Component, OnInit, Input } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../shared/styles.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
