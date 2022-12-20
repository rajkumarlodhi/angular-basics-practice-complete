import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {
  @Input('appRendererHighlight') defaultColor: string = ''
  @Input() highlightColor: string = ''
  @HostBinding('style.backgroundColor') color: string = '';
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.color = this.defaultColor
  }
  //using renderer2
  // @HostListener('click') OnClick() {
  //   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  // }
  @HostListener('click') OnClick(event: Event) {
    this.color = this.highlightColor
  }
  @HostListener('onmouseenter') OnMouseEnter(event: Event) {
    this.color = 'green'
  }
  @HostListener('onmouseleave') OnMouseLeave(event: Event) {
    this.color = 'yellow'
  }
  @HostListener('onmousemove') onMouseMove(event: Event) {
    this.color = 'gray'
  }

}
