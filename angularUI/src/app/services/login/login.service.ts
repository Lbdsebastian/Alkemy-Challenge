import { Student } from './../../models/Students/student';
import { ApiService } from './../api.service';
import { Admin } from './../../models/Admins/admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private url: ApiService) { }



  loginAdm(obj: Admin){
    return this.http.post(this.url.AdmApiUrl,{
       DNI: obj.DNI,
       File_number: obj.File_number
     });
  }

  logout(){

  }

  loginStudent(obj: Student){
    return this.http.post(this.url.loginStudentUrl, {
    DNI: obj.DNI,
    File_number: obj.File_number,
    })
  }

  regStudent(obj: Student){
    return this.http.post(this.url.regStudentUrl, {
    First_name: obj.First_name,
    Last_name: obj.Last_name,
    DNI: obj.DNI,
    File_number: obj.File_number
    } )
  }



}
