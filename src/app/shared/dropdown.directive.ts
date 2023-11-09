import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let part = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      part.classList.add('show');
    } else {
      part.classList.remove('show');
    }
  }
}
