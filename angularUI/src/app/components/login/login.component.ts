import { SharedService } from './../../services/shared/shared.service';
import { LoginService } from './../../services/login/login.service';

import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginS: LoginService,
    private shared: SharedService) { }

  ngOnInit(): void {

  }

  loginForm = new FormGroup ({
    DNI: new FormControl(''),
    File_number: new FormControl(''),
  })

  isAdmin: boolean = false;
  Respuesta: any;
  AdmLogged: boolean = false;
  test: any;



  onSubmit(form: FormGroup){
    if (this.isAdmin){
      this.loginS.loginAdm(form.value).subscribe(resp => {
        this.Respuesta = resp;
        if (this.Respuesta.Resultado){  // login devuelve una respuesta, si su resultado es true se trata de un administrador, si su resultado es false se trata de un alumno
          this.router.navigate(['AdmDashboard']);   // redirige al dashboard de administración
          this.AdmLogged = true;
          this.shared.setAdminStatus(this.AdmLogged);   // Se pasa ese valor al shared service para guardarlo en una variable que puede ser compartida por todos los componentes
        }
        else {
          alert("No existe un usuario matriculado con esos datos. Por favor introduzca los datos correctamente");
        }
      })
    }
    else {
      this.loginS.loginStudent(form.value).subscribe(resp =>
        {
          this.Respuesta = resp;
          if  (this.Respuesta.Resultado){
            this.AdmLogged = false;
            this.shared.setAdminStatus(this.AdmLogged);  //envía el valor del booleano que decide si logeo un admin o no
            this.router.navigate(['StdDashboard']);      // redirige al dashboard del alumno
            this.shared.setStudentInfo(form.value);      // envía la información del alumno logeado al servicio compartido
          }
        })
    }
  }

  adminSwap(){
    this.isAdmin = !this.isAdmin;
  }
}
