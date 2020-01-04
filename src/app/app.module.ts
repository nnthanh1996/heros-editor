import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingsModule } from "./app-routings/app-routings.module";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesService } from './heroes.service';
import { HeroesMessagesComponent } from './heroes-messages/heroes-messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReRegisterFormComponent } from './re-register-form/re-register-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingsModule, HttpClientModule, ReactiveFormsModule, HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false}
  ) ],
  declarations: [ AppComponent, HeroesComponent, HeroesDetailsComponent, HeroesMessagesComponent, DashboardComponent, ReRegisterFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService, MessageService, InMemoryDataService]
})
export class AppModule { }
