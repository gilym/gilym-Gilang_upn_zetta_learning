import { Component, OnInit,Output,EventEmitter,Input,SimpleChange, OnChanges, SimpleChanges, AfterContentChecked,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Selecteditem } from '../kasir/kasir.component';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  styles : ['[bgAqua]{  Background-color: aliceblue;}',
        '[bgGreen]{background-color: #05fa46;}'

],

})
export class PaymentComponent implements OnInit,AfterContentChecked,AfterViewInit {
  @Input() items!: Selecteditem[];
  @Output () itemChanges : EventEmitter<Selecteditem[]> = new EventEmitter <Selecteditem[]>;
  @ViewChild('bgAqua') bgAqua?:ElementRef;
  @ViewChild('bgGreen') bgGreen?:ElementRef;
  public total :number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bgAqua?.nativeElement.setAttribute('bgAqua', '');
    this.bgGreen?.nativeElement.setAttribute('bgGreen', '');
  }

 
  
  ngAfterContentChecked(): void {
 
    this.total = this.items.reduce((total, item) => total += item.amount * item.Harga , 0)
  }

  removeItem(itemToBeRemoved:Selecteditem){
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
  
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
   
    
  
  }

}


