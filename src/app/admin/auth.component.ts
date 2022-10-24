import { AuthService } from './../model/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    username?: string
    password?: string
    errorMessage?: string

    constructor(private router: Router, private auth: AuthService) {}

    authenticate(form: NgForm) {
        if(form.valid) {
            this.auth.authenticate(this.username ?? "", this.password ?? "")
                .subscribe(res => {
                    if (res) {
                        this.router.navigateByUrl("/admin/main")
                    } else {
                        this.errorMessage = "Authentication Failed"
                    }
                })
        } else {
            this.errorMessage = "Form Data Invalid"
        }
    }
}
