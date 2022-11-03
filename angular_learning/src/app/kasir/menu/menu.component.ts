import { Component, Input, OnInit,EventEmitter,Output,AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { item } from '../kasir/kasir.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  styles :['[bg]{ background-color: red}']
})
export class MenuComponent implements OnInit ,AfterViewInit{
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()
  @ViewChild ('bgaq') li?:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }
  ngAfterViewInit() {
      this.li?.nativeElement.setAttribute('bgaq','')
  }

}
