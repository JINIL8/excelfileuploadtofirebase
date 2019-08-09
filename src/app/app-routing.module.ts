import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './services/authguard.service';
const routes: Routes = [
    { path: 'login', component: LoginpageComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
    LoginpageComponent,
    DashboardComponent
];
