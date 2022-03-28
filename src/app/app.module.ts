import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { DetailsComponent } from './recipes/details/details.component';
import { LoginComponent } from './login/login.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

const appRoutes: Routes=[
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutslimnfitComponent},
  {path:'service',component:ServiceComponent,children: [
    {path: 'serviceslist', component: ServiceslistComponent},
    {path: 'dailymealplan', component: DailymealplanComponent},
  ]},
  {path:'contact-us',component:ContactusComponent},
  {path:'success-stories',component:TestimonialsComponent},
  {path:'recipes',component:HomeComponent,children: [
    {path: 'recipeslist', component: ListComponent},
    {path: 'recipedetail', component: DetailsComponent,outlet:'detail'},
  ]},
  {path: 'recipes-list', component: ListComponent},
  {path:'recipe-detail',component:DetailsComponent},
  {path:'login',component:LoginComponent},
  
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
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
