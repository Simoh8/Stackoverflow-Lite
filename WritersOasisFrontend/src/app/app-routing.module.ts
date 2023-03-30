import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from'./Components/home/home.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path :'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
