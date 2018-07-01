import { Component, OnInit, Input } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../../shared/styles.css']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;
  @Input() reverseDisplay: boolean;

  constructor() { }

  ngOnInit() {
  }

}
