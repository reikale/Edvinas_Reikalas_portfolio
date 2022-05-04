import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { Sausio13Component } from './components/pages/sausio13/sausio13.component';
import { Openhouse2020Component } from './components/pages/openhouse2020/openhouse2020.component';
import { Openhouse2021Component } from './components/pages/openhouse2021/openhouse2021.component';
import { HideyournosesComponent } from './components/pages/hideyournoses/hideyournoses.component';
import { GivveryComponent } from './components/pages/givvery/givvery.component';
import { SamuelisbakasComponent } from './components/pages/samuelisbakas/samuelisbakas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    WorkComponent,
    ContactFormComponent,
    FooterComponent,
    Sausio13Component,
    Openhouse2020Component,
    Openhouse2021Component,
    HideyournosesComponent,
    GivveryComponent,
    SamuelisbakasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
