import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }
  @HostListener('click') OnClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }
  @HostListener('onmouseenter') OnMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('onmouseleave') OnMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'gray');
  }
  @HostListener('onmousemove') onMouseMove() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'gray');
  }

}
