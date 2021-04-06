import { Student } from './../../../models/Students/student';
import { ApiService } from './../../api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private url: ApiService, private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.url.StudentUrl);
  }

  getStudent(id: number){
    return this.http.get(this.url.StudentUrl + '?Id=' + id)
  }

  getStudentByDNI(dni: string){
    return this.http.get(this.url.StudentUrl + 'getByDni/?dni=' + dni)
  }

  postStudent(obj: Student){
    return this.http.post(this.url.adminTeachersUrl + 'add/' , {
      Id: obj.Id,
      First_name: obj.First_name,
      Last_name: obj.Last_name,
      DNI: obj.DNI,
      File_number: obj.File_number,
      Token: obj.Token,
    })
  }

  putStudent(obj: Student, id: number){
    return this.http.put(this.url.adminTeachersUrl , {
      Id: obj.Id,
      First_name: obj.First_name,
      Last_name: obj.Last_name,
      DNI: obj.DNI,
      File_number: obj.File_number,
      Token: obj.Token,
    })
  }

  delStudent(id: number){
    return this.http.delete(this.url.adminTeachersUrl + '?Id=' + id)
  }

 regStudentToSubj(subjID: number, studentID: number ){
   return this.http.post(this.url.regToSubjUrl + '?subjectID=' + subjID + '&studentID=' + studentID, {});
 }

  getListofSubjects(studentID: number){
    return this.http.get(this.url.student_subjectUrl + '?id=' + studentID)
 }
}
