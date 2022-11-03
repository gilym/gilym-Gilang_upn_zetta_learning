import { Component,AfterViewInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles :['[bg]{ background-color: red}']
})
export class AppComponent implements AfterViewInit  {
  title = 'angular_learning';
  @ViewChild ('bgaq') li?:ElementRef



  ngAfterViewInit() {
    this.li?.nativeElement.setAttribute('bgaq','')
}
}
