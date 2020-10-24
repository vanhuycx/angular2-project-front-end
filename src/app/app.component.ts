import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div>
              <h1>{{getFullName()}}</h1>
              <img src ='https://www.google.com/images/branding/googlelogo/1x/{{imgPath}}'/>
             <app-employee></app-employee>
             <button [disabled] = "isDisabled">Click me</button>
        
             </div> -->
             <button style="color:blue" [ngStyle] ="addStyles()">My button</button>
                
  `,
})
export class AppComponent {
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic? 'italic' : 'normal',
      'font-weight' : this.isBold? 'bold': 'normal'
    }
    return styles
  }

}
