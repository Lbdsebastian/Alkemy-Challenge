import { TeachersService } from './../../../services/admins/teachers/teachers.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-teachers',
  templateUrl: './adm-teachers.component.html',
  styleUrls: ['./adm-teachers.component.css']
})
export class AdmTeachersComponent implements OnInit {

  constructor(private service: TeachersService ) { }

  ngOnInit(): void {
    this.getTeachers();

  }


  activeTeacher: any;
  teachers: any = [];
  teacher: any;
  isDisabled: boolean = true;
  show: boolean = false;
  editTeacher: boolean = false;
  teacherCard: boolean = false;
  deleteTeacher: boolean = false;


  teacherForm = new FormGroup({
    First_name: new FormControl(''),
    Last_name: new FormControl(''),
    DNI: new FormControl( '')
  });

  editTeacherForm = new FormGroup({});

  onSelect(selectedItem: any) {
    this.isDisabled = false;
    this.service.getTeacher(selectedItem.Id).subscribe(resp =>
      {
        this.teacher = resp;
      })
  }

  actPostCard(){
    this.teacherCard = !this.teacherCard;
    this.deleteTeacher = false;
    this.editTeacher = false;
    this.isDisabled = true;
  }

  actPutCard(){
    this.editTeacher = !this.editTeacher;
    this.deleteTeacher = false;
    this.teacherCard  = false;
    this.editTeacherForm = new FormGroup({
      First_name: new FormControl(this.teacher.First_name, Validators.required),
      Last_name: new FormControl(this.teacher.Last_name, Validators.required),
      DNI: new FormControl(this.teacher.DNI, Validators.required),
      Active: new FormControl( true, Validators.required),
    });
  }

  actDelCard(){
    this.deleteTeacher = !this.deleteTeacher;
    this.editTeacher = false;
    this.teacherCard = false;
  }


  teacherEdit(form: FormGroup, id: number){
    this.service.putTeacher(form.value, id).subscribe(resp =>
      {
        this.getTeachers();
        this.editTeacher = false;
      })
      this.isDisabled = true;
  }

  onSubmit(form: FormGroup){
    this.service.postTeacher(form.value).subscribe(resp =>{
      this.getTeachers();
      this.teacherCard = false;
    })
  }


  delTeacher(id: number){
    this.service.delTeacher(id).subscribe(resp =>
      {
        this.getTeachers();
        this.deleteTeacher = false;
        this.isDisabled = true;
      })
  }

  getTeachers(){
    this.service.getTeachers().subscribe(resp =>
      {
        this.teachers = resp;
      })
  }



}
