import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { SignupModule } from './signup/signup.module';
import { EndUserModule } from './end-user/end-user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
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
    SignupModule,
    ReactiveFormsModule,
    FormsModule,
    EndUserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
