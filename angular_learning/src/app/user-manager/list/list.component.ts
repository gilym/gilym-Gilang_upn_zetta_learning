import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserManagerService } from '../user-manager.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list : Observable<User[]>
  users;
  constructor(private service : UserManagerService) { 
    this.list = this.service.users$
   console.log(this.list);
   this.users = this.service.getAllUser();

  }
  filterString : string= ''

  ngOnInit(): void {
  }


  // searchUser(event: any){
  //   this.users = [];
  //   let name, keyword;
  //   this.service.getAllUser().forEach((item) => {
  //     name = this.normalizeText(item.name);
  //     keyword = this.normalizeText(event.target.value);
      
  //     if(name.includes(keyword)) this.users.push(item)
  //   })
  // }

  // normalizeText(text: string){
  //   text = text.replace(/\s/g, '');
  //   text = text.toLowerCase();
  //   text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //   return text
  // }

}
