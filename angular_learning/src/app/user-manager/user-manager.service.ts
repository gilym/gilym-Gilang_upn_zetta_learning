import { Injectable } from "@angular/core";
import { Observable,BehaviorSubject } from "rxjs";

@Injectable({
    providedIn :'root'
})
export class UserManagerService{
private _users : BehaviorSubject<User[]> = new BehaviorSubject <User[]>([])
public users$ : Observable<User[]>

constructor(){
    this.users$ = this._users.asObservable()
}

GetUserById(id : string): User | undefined {
    return this._users.value.find(user => user.id ===id)
}

addUser(payload : User):void{
    const UserIdx = this._users.value.findIndex(user => user.id ===payload.id)
    if(UserIdx >= 0){
        this._users.value.splice(UserIdx,1,payload)
    }
    else{
        this._users.value.push(payload)
    }
}


}