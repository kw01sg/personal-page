import { Component, OnInit, Input } from '@angular/core';
import { PageNavItem } from './page-nav-item.model';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit {
  @Input() pageNavLinks: PageNavItem[];
  constructor() { }

  ngOnInit() {
  }

}
