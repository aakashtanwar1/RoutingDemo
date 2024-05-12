import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { SkillComponent } from './about/skill/skill.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    children: [
      { path: '', redirectTo: 'experience', pathMatch: 'full' },
      {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Experience',
      },
      { path: 'skill', component: SkillComponent, title: 'Skill' },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];
