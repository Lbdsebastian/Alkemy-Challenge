import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  AdminLoggedIn: boolean = false;
  StdLoggedIn: boolean = false;
  studentInfo: any = [];


  constructor() { }

  getAdminStatus(){
    return this.AdminLoggedIn;
  }

  setAdminStatus(val: boolean){
    this.AdminLoggedIn = val;
    return this.AdminLoggedIn;
  }
}
