import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {  RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmDashboardComponent } from './components/adm-dashboard/adm-dashboard.component';
import { StdDashboardComponent } from './components/std-dashboard/std-dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { AdmTeachersComponent } from './components/adm-dashboard/adm-teachers/adm-teachers.component';
import { AdmSubjectsComponent } from './components/adm-dashboard/adm-subjects/adm-subjects.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


const routes = [
{ path: '', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'AdmDashboard', component: AdmDashboardComponent },
{ path: 'StdDashboard', component: StdDashboardComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    AdmDashboardComponent,
    StdDashboardComponent,
    AdmTeachersComponent,
    AdmSubjectsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule

  ],
  providers: [
    Title,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
