import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthentificationGuard } from 'src/app/authentification.guard';
import { RoleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'admin-dashboard', component: DashboardComponent},
  {path:'profil', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
