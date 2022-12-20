import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') color: string = '';
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }
  //using renderer2
  // @HostListener('click') OnClick() {
  //   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  // }
  @HostListener('click') OnClick() {
    this.color = 'green'
  }
  @HostListener('onmouseenter') OnMouseEnter() {
    this.color = 'green'
  }
  @HostListener('onmouseleave') OnMouseLeave() {
    this.color = 'yellow'
  }
  @HostListener('onmousemove') onMouseMove() {
    this.color = 'gray'
  }

}
