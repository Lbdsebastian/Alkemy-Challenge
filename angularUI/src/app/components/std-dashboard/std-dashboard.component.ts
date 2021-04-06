import { StudentsService } from './../../services/admins/students/students.service';
import { SharedService } from './../../services/shared/shared.service';
import { SubjectsService } from './../../services/admins/subjects/subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.css']
})
export class StdDashboardComponent implements OnInit {

  constructor(private service: SubjectsService, private shared: SharedService, private student: StudentsService) { }

  ngOnInit(): void {
    this.studentDNI = this.shared.getStudentInfo();
    this.getStudentInfo(this.studentDNI.DNI);
  }

  studentDNI: any;
  studentInfo: any;
  studentListofSubj: any = [];
  show: boolean = false;
  isDisabled: boolean = true;
  showSubj: boolean = false;
  showStdSubjs: boolean = true;
  subjects: any = [];
  subject: any;

showSubjects(){
  this.service.getSubjects().subscribe(resp =>{
    this.subjects = resp;
    this.showSubj = true;
  })
}

onSelect(selectedSubject: any){
  this.subject = selectedSubject;
}

regToSubject(subjectID: number, studentID: number ){
  this.student.regStudentToSubj(subjectID, studentID).subscribe(resp =>
    {
      console.log(resp);
    })
}

getStudentInfo(info: any){
  this.student.getStudentByDNI(info).subscribe(resp =>
    {
      this.studentInfo = resp;
      console.log(this.studentInfo);
    })
}

getStudentListOfSubjects(id: number){
  this.student.getListofSubjects(id).subscribe(resp =>
    {
      this.studentListofSubj = resp;
    })
}
}
