import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { LogoutModule } from './logout/logout.module';
import { ReadEmailModule } from './read-email/read-email.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AdminModule,
    LoginModule,
    ContactModule,
    HomeModule,
    LogoutModule,
    ReadEmailModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
