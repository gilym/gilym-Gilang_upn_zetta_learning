import { Component, OnInit,Output,EventEmitter,Input,SimpleChange } from '@angular/core';
import { Selecteditem } from '../kasir/kasir.component';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() items: Selecteditem[]=[]
  @Output () itemChanges : EventEmitter<Selecteditem[]> = new EventEmitter <Selecteditem[]>;

  public total :number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChange):void{
    this.total = this.items.reduce((total, item) => total += item.amount * item.Harga , 0)
      }

}
