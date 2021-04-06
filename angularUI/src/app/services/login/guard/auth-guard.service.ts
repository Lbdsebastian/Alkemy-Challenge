import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from './../../shared/shared.service';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private adminStatus: SharedService,
    private router: Router
    ) { }

  isAdmin: any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.isAdmin = this.adminStatus.getAdminStatus();
    if (this.isAdmin){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }








}
