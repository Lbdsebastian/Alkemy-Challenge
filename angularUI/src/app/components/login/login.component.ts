import { SharedService } from './../../services/shared/shared.service';
import { LoginService } from './../../services/login/login.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  isAdmin: boolean = false;
  Respuesta: any;
  AdmLogged: boolean = false;
  test: any;

  onSubmit(form: NgForm){
    if (this.isAdmin){
      this.loginS.loginAdm(form.value).subscribe(resp => {
        this.Respuesta = resp;
        if (this.Respuesta.Resultado){
          this.router.navigate(['AdmDashboard']);
          this.AdmLogged = true;
          this.shared.setAdminStatus(this.AdmLogged);
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
            this.router.navigate(['StdDashboard']);
            this.shared.setStudentInfo(form.value);
          }
        })
    }

  }

  adminSwap(){
    this.isAdmin = !this.isAdmin;
  }
}
