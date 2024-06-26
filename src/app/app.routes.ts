import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent  },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'login', component: LoginComponent },
        { path: 'superadmin-dashboard', component: SuperadminDashboardComponent },
        { path: 'register', component: RegisterComponent }
];
