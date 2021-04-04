import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serv: LoginService) { }
  isreg: boolean = false;
  numLegajo: any;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    form.value.File_number = this.generarLegajo();
    this.numLegajo = form.value.File_number;

    this.serv.regStudent(form.value).subscribe(resp =>
      {
        console.log(resp);
      })
      this.isreg = true;
  }

  generarLegajo(){
    return Math.floor(100000 + Math.random() * 900000);
  }
}
