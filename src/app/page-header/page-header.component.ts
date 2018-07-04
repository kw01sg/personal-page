import { Component, OnInit, Input } from '@angular/core';
import { PageNavItem } from './page-nav/page-nav-item.model';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageHeader: string;
  @Input() pageNavLinks: PageNavItem[];

  constructor() { }

  ngOnInit() {
  }

}
