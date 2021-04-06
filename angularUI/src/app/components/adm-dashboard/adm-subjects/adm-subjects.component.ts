import { TeachersService } from './../../../services/admins/teachers/teachers.service';
import { SubjectsService } from './../../../services/admins/subjects/subjects.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';




@Component({
  selector: 'app-adm-subjects',
  templateUrl: './adm-subjects.component.html',
  styleUrls: ['./adm-subjects.component.css']
})
export class AdmSubjectsComponent implements OnInit {

  constructor(private sbjService: SubjectsService, private teachers: TeachersService) { }

  ngOnInit(): void {
    this.getSubjects();
    this.getTeachers();
  }

availableTeachers: any = [];
subjects: any = [];
deleteSubj: boolean = false;
editSbj: boolean = false;
sbjCard: boolean = false;
postSbj: boolean = false;
showIDS: boolean = false;
isDisabled: boolean = true;
subject: any;

// Formulario para funcionalidad PUT
editSubjectForm = new FormGroup({});

// formulario para funcionalidad POST
subjectForm = new FormGroup({
  Name: new FormControl(''),
  Time_start: new FormControl(''),
  Time_end: new FormControl(''),
  Teacher: new FormControl(),
  Maximum_quota: new FormControl('')
})

// funciones para mostrar-ocultar tarjetas
actPostCard(){
  this.sbjCard = !this.sbjCard;
  this.editSbj = false;
}

actDelCard(){
  this.deleteSubj = !this.deleteSubj;
  this.sbjCard = false;
  this.editSbj = false;

}

actPutCard(){
  this.sbjCard = false;
  this.editSbj = !this.editSbj;
  this.editSubjectForm = new FormGroup({
    Name: new FormControl(this.subject.Name, Validators.required),
    Time_start: new FormControl(this.subject.Time_start, Validators.required),
    Time_end: new FormControl(this.subject.Time_end, Validators.required),
    Teacher: new FormControl(this.subject.Teacher, Validators.required),
    Maximum_quota: new FormControl(this.subject.Maximum_quota, Validators.required)
  })
}

// funciones CRUD:
// 1: Post
onSubmit(form: FormGroup){
  this.sbjService.postSubject(form.value).subscribe(resp =>
    {
      console.log(resp);
      form.reset();
      this.getSubjects();
      this.sbjCard = false;
    })
}

// 2: Put
putSubject(form: FormGroup, id: number){
  this.sbjService.putSubject(form.value, id).subscribe(resp =>
    {
      form.reset();
      this.getSubjects();
      this.editSbj = !this.editSbj;
    })
}

// 3: Get
getSubjects(){
  this.sbjService.getSubjects().subscribe(resp =>
    {
      this.subjects = resp;
    })
}

// 4: Delete
deleteSubject(id: number){
  this.sbjService.deleteSubject(id).subscribe(resp =>
    {
      this.getSubjects();
      this.deleteSubj = false;
      console.log(resp);
      this.isDisabled = true;
    })
}

// Función para seleccionar una materia y obtener sus datos
onSelect(selectedItem: any) {
  this.isDisabled = false;
  this.sbjService.getSubject(selectedItem.Id).subscribe(resp =>
    {
      this.subject = resp;
    })
}

getTeachers(){
  this.teachers.getTeachers().subscribe(resp =>
    {
      this.availableTeachers = resp;
    })
}

}

