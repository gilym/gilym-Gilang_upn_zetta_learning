import { Component ,AfterViewInit,ElementRef,ViewChild ,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styles:[`[highlight]{background: green; color: white}`,
          '[coba]{background: red; color: white}'

    ]
})

export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild('el') bgGreen?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;

ngOnInit():void{

}

  ngAfterViewInit(){
    this.bgGreen?.nativeElement.setAttribute('highlight', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
   
  } 
}