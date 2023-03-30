import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AssignedComponent } from './Components/assigned/assigned.component';
import { BroadcastsComponent } from './Components/broadcasts/broadcasts.component';
import { ClientssComponent } from './Components/clientss/clientss.component';
import { CompletedComponent } from './Components/completed/completed.component';
import { DirectcontractsComponent } from './Components/directcontracts/directcontracts.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { MybidsComponent } from './Components/mybids/mybids.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { RevisionsComponent } from './Components/revisions/revisions.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WritersComponent } from './Components/writers/writers.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dc', component: DirectcontractsComponent },
  { path: 'mybid', component: MybidsComponent },
  { path: 'assigned', component: AssignedComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'revisions', component: RevisionsComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'writers', component: WritersComponent },
  { path: 'clients', component: ClientssComponent },
  { path: 'broadcasts', component: BroadcastsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
