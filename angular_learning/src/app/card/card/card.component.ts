import { Component, OnInit } from '@angular/core';
export interface card{ id:number, nama:string, deskripsi:string }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cards : card[]=[
    {id : 1,  nama:'supermen',  deskripsi:'Pake kolor s'},
    {id : 2,  nama:'batman',  deskripsi:'hero kelelawar'},
    {id : 3,  nama:'hulk',  deskripsi:'raksasa hijau'},
    {id : 4,  nama:'ironmen',  deskripsi:'mesin'},
  ]

  


  constructor() { }

  ngOnInit(): void {
  }

}
