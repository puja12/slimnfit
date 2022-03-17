import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutslimnfitComponent } from './aboutslimnfit/aboutslimnfit.component';
import { BmicalComponent } from './bmical/bmical.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './recipes/home/home.component';
import { ListComponent } from './recipes/list/list.component';
import { Routes,RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DailymealplanComponent } from './dailymealplan/dailymealplan.component';
import { ServiceslistComponent } from './service/serviceslist/serviceslist.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

const appRoutes: Routes=[
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutslimnfitComponent},
  {path:'service',component:ServiceComponent,children: [
    {path: 'serviceslist', component: ServiceslistComponent},
    {path: 'dailymealplan', component: DailymealplanComponent},
  ]},
  {path:'contact-us',component:ContactusComponent},
  {path:'success-stories',component:TestimonialsComponent},
  {path:'recipes',component:HomeComponent},
]

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
    ListComponent,
    ServiceComponent,
    ContactusComponent,
    TestimonialsComponent,
    ServiceslistComponent,
    DailymealplanComponent,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
