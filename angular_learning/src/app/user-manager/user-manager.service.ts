import { Injectable } from "@angular/core";
import { Observable,BehaviorSubject } from "rxjs";
export interface User {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
 

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

    console.log(this._users);
    
  
    
}
getAllUser(){
    return this._users
}

getListById(id:string) : any{
    const listarray = this._users.getValue();
    console.log(listarray)
    const list = listarray.find(list => list.id ===id)
    return list || null;
    
  
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
     const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
     FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }


}