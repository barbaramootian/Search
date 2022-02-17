import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {
    
    this.elem.nativeElement.style.color = 'blue';
  }
  @HostListener('click') onClicks() {
    this.changeColorOfText('blue');
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.strikeText("line-through")
  }

  private changeColorOfText(action: string) {
    this.elem.nativeElement.style.color = action;
  }

  private strikeText(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
