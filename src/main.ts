import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { HomeComponent } from './app/home/home.component';
// import { AboutComponent } from './app/about/about.component'; // Import AboutComponent
// import { FooterComponent } from './app/footer/footer.component';
// import { HeaderComponent } from './app/header/header.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
// import { LoginComponent } from './app/login/login.component';
// import { ContactComponent } from './app/contact/contact.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});
