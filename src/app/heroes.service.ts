import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HEROES } from '../assets/heroes';
import { Hero } from '../assets/hero';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroesService {

  constructor(public messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');

    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
     this.messageService.add(`HeroService: fetched hero id=${id}`);
     
     return of(HEROES.find(hero => hero.id === id));
  }

}