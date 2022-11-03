import { Component, Input, OnInit,EventEmitter,Output,AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { item } from '../kasir/kasir.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  styles:['[bgaq]{  background-color: aquamarine;}',
  '[coba]{background: red; color: white}'

]
})
export class MenuComponent implements OnInit ,AfterViewInit{
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()
  @ViewChild('bgaq') bgaq?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("hai from init")
  }

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

  ngAfterViewInit(){
    console.log("hai from view")
    this.bgaq?.nativeElement.setAttribute('bgaq', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
   
  } 
  

}
