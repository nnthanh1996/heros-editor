import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesService } from './heroes.service';
import { HeroesMessagesComponent } from './heroes-messages/heroes-messages.component';
import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroesComponent, HeroesDetailsComponent, HeroesMessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService, MessageService]
})
export class AppModule { }
