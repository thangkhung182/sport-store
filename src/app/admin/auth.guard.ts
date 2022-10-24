import { AuthService } from './../model/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard {
    constructor(private router: Router, private auth: AuthService) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth")
            return false
        }

        return true
    }
}