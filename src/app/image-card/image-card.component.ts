import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../shared/models/image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css', '../shared/styles.css', '../shared/load-timer.css']
})
export class ImageCardComponent implements OnInit {
  @Input() image: Image;

  constructor() { }

  ngOnInit() {
  }

}
