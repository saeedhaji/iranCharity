import { Directive, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestAccount]'
})
export class TestAccountDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener('mouseenter')mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red',)
  }
  @HostListener('mouseleave')mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','#5b6bc2')
  }
}
