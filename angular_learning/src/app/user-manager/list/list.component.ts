import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserManagerService } from '../user-manager.service';
export interface Users {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list : Observable<User[]>
  users;
  public temp :Users []=[]
  
  constructor(private service : UserManagerService) { 
    this.list = this.service.users$
   console.log(this.list);
   this.users = this.service.getAllUser();
  this.list.subscribe(tes =>{
    this.temp=tes
  })
  console.log(this.temp);

  }

  filterString : string= ''

  save (){
    this.service.exportAsExcelFile(this.temp,"Sample")
  }

  ngOnInit(): void {
  }


  

}
