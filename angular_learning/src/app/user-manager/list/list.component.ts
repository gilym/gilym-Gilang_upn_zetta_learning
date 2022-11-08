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
  constructor(private service : UserManagerService) { 
    this.list = this.service.users$
  }

  ngOnInit(): void {
  }

}
