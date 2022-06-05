import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEmailColor]'
})
export class EmailColorDirective {
  @Input() color: string = ''

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(!!this.color ? this.color : 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
