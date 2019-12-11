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
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingsModule ],
  declarations: [ AppComponent, HeroesComponent, HeroesDetailsComponent, HeroesMessagesComponent, AppDashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService, MessageService]
})
export class AppModule { }
