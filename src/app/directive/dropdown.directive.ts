import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Add open class to button-group

  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // @HostListener('click') clickInside(eventData: Event): void {
  //   this.renderer.addClass(this.elementRef.nativeElement, 'open');
  // }

  @HostListener('document:click', ['$event']) clickOutside(eventData: Event): void {
    if (!this.elementRef.nativeElement.contains(eventData.target)) {
      // this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isOpen = false;
    }
  }

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

}
