import { Component } from '@angular/core';
import { ValueService } from './value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public newValue: string = '';
  public oldValue: string = '';

  timeout: any = null;

  public constructor(public valueService: ValueService) {
    this.newValue = "Hello World";
    this.oldValue = this.newValue;
  }

  public onStopWritting(event: any) {
    clearTimeout(this.timeout);
    
    var $this = this;
    
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
          $this.validateAndCallService();
      }
    }, 1000);
  }

  private async validateAndCallService() {
    if(this.newValue != this.oldValue) {
      await this.valueService.myMethod(this.newValue);

      this.oldValue = this.newValue;
    }
  }
}
