import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { WindowRef } from '../shared/services/window-ref.service';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {
  private lastScrollPosition = this.windowRef.nativeWindow.pageYOffset || document.documentElement.scrollTop || 0;
  private minPosition = 100;
  private mobileDropdownMenu: any;

  constructor(
    private element: ElementRef,
    private windowRef: WindowRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.mobileDropdownMenu = this.element.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('window:scroll', ['$event'])
  onMouseScroll() {
    let newScrollPosition = this.windowRef.nativeWindow.pageYOffset;
    if (newScrollPosition > this.lastScrollPosition && newScrollPosition > this.minPosition) {
      this.renderer.addClass(this.element.nativeElement, 'hide');
      this.renderer.removeClass(this.mobileDropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'hide');
    }

    this.lastScrollPosition = newScrollPosition <= 0 ? 0 : newScrollPosition;
  }

}
