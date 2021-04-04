import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  //login admin
  AdmApiUrl =  'https://localhost:44366/api/admin/login/';
  // admin materias
  AdminSubjUrl = 'https://localhost:44366/api/admin/subjects/';

  // materias
  SubjApiUrl  = 'https://localhost:44366/api/subjects/';

 // registrar y logear alumno
  regStudentUrl = 'https://localhost:44366/api/students/register/';
  loginStudentUrl = 'https://localhost:44366/api/students/login';
  // obtener alumnos
  StudentUrl = 'https://localhost:44366/api/students/';

  //administrar alumnos
  AdmStudentUrl = '';

//obtener profesores
teachersUrl = 'https://localhost:44366/api/teachers/';

//administrar profesores
adminTeachersUrl = 'https://localhost:44366/api/admin/teachers/'


}
