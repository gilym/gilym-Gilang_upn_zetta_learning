import { Component, OnInit ,Input} from '@angular/core';
import { card } from '../card/card.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input ('cards') cards:card[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
