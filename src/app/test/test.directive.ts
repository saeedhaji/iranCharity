import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @HostListener('mouseenter')mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red')
  }
  @HostListener('mouseleave')mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','#ffff')
  }

}
