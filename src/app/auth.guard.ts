import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router){}
    
    canActivate():boolean{
        if(localStorage.getItem('currentUser')){
            return true;
        }
        this.router.navigate(['/auth']);
        return false;
    }
}