import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HeroesDetailsComponent } from "../heroes-details/heroes-details.component";
import { ReRegisterFormComponent } from '../re-register-form/re-register-form.component';

const routes : Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes/detail/:id', component: HeroesDetailsComponent},
  {path: 'registerv1', component: ReRegisterFormComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingsModule { }