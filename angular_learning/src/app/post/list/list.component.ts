import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface post {userid:number ,id : number , title : string, body : string}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
readonly  ROOT_URL = "https://jsonplaceholder.typicode.com/posts";

 posts : Observable<post[]>;
  constructor(private http : HttpClient) { 
    this.posts = this.http.get<post[]>(this.ROOT_URL )
    
  }

  ngOnInit(): void {
    
    
  }

}
