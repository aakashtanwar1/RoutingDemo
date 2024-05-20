import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { SkillComponent } from './about/skill/skill.component';
import { DetailsComponent } from './details/details.component';
import { deactivateGuard } from './gaurds/deactivate.guard';
import { activateChildGuard } from './gaurds/activate-child.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { canMatchGuard } from './gaurds/can-match.guard';
import { canActivateGuard } from './gaurds/can-activate.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login',canDeactivate: [deactivateGuard] },
  { path: 'signup', component: SignupComponent, title: 'Signup',canActivate : [canActivateGuard] },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'dashboard', component: AdminDashboardComponent, title: 'Admin', canMatch:[canMatchGuard] },
  { path: 'dashboard', component: UserDashboardComponent, title: 'User' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details'},
  // { path: 'details', component: DetailsComponent, title: 'Details' },
  
  // for route data example
  {
    path: 'details', component: DetailsComponent, title: 'Details',
    data: { detail: "this is detail page" }
  },
  
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    canActivateChild : [activateChildGuard],
    children: [
      // { path: '', redirectTo: 'experience', pathMatch: 'full' },
      {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Experience',
      },
      {
        path: 'skill', component: SkillComponent, title: 'Skill'
       },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];
