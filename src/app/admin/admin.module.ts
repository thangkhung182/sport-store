import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent},
    {path: "main", component: AdminComponent, canActivate: [AuthGuard]},
    {path: "**", redirectTo: "auth"}
])

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent],
    providers: [AuthGuard]
})
export class AdminModule {}