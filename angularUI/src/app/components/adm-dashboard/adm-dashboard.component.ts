import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-dashboard',
  templateUrl: './adm-dashboard.component.html',
  styleUrls: ['./adm-dashboard.component.css']
})
export class AdmDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  admProf: boolean = false;
  admMaterias: boolean = false;


  switchAdmProf(){
    if (this.admMaterias){

      this.admMaterias = false;
    }
    this.admProf = !this.admProf;
  }



  switchAdmMaterias(){
    if (this.admProf ){
      this.admProf = false;
    }
    this.admMaterias = !this.admMaterias;
  }
}
