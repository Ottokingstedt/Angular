import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {DashboardComponent}  from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
// const usersModule = () => import()
const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
    { path: 'page-not-found', component: PageNotFoundComponent},
    { path: '**', component: PageNotFoundComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
],
  exports: [RouterModule]
})

export class AppRouting { }
