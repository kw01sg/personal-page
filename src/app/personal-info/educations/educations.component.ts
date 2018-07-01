import { Component, OnInit } from '@angular/core';
import { Education } from './education/education.model';
import { EDUCATIONS } from './educations';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  educations: Education[] = EDUCATIONS;
  constructor() { }

  ngOnInit() {
  }

}
