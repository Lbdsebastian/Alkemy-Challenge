import { Subject } from './../../../models/Subjects/subject';
import { ApiService } from './../../api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient, private apiUrl: ApiService) { }


  postSubject(val: Subject){
    return this.http.post(this.apiUrl.AdminSubjUrl , {
      Name: val.Name,
      Time_start: val.Time_start,
      Time_end: val.Time_end,
      Teacher: val.Teacher,
      Maximum_quota: val.Maximum_quota,
    })
  }

  getSubjects(){
    return this.http.get(this.apiUrl.SubjApiUrl);
  }

  getSubject(val: number){
    return this.http.get(this.apiUrl.SubjApiUrl + val);
  }

  putSubject(val: Subject, id: number){
    return this.http.put(this.apiUrl.AdminSubjUrl , {
      Id: id,
      Name: val.Name,
      Time_start: val.Time_start,
      Time_end: val.Time_end,
      Teacher: val.Teacher,
      Maximum_quota: val.Maximum_quota,
    })
  }

  deleteSubject(id: number){
  return  this.http.delete(this.apiUrl.AdminSubjUrl + '?Id=' + id);
  }
}
