import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutslimnfitComponent } from './aboutslimnfit/aboutslimnfit.component';
import { BmicalComponent } from './bmical/bmical.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './recipes/home/home.component';
import { ListComponent } from './recipes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutslimnfitComponent,
    BmicalComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
