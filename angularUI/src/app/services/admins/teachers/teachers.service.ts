import { Teacher } from './../../../models/Teachers/teacher';
import { ApiService } from './../../api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private url: ApiService, private http: HttpClient) { }

  getTeachers(){
    return this.http.get(this.url.teachersUrl);
  }

  getTeacher(id: number){
    return this.http.get(this.url.teachersUrl + '?Id=' + id)
  }

  postTeacher(obj: Teacher){
    return this.http.post(this.url.adminTeachersUrl + 'add/' , {
      First_name: obj.First_name,
      Last_name: obj.Last_name,
      DNI: obj.DNI,
    })
  }

  putTeacher(obj: Teacher, id: number){
    return this.http.put(this.url.adminTeachersUrl , {
      Id: id,
      First_name: obj.First_name,
      Last_name: obj.Last_name,
      DNI: obj.DNI,
      Active: obj.Active
    })
  }

  delTeacher(id: number){
    return this.http.delete(this.url.adminTeachersUrl + '?Id=' + id)
  }
}
