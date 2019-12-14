import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HEROES } from '../assets/heroes';
import { Hero } from '../assets/hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroesService {

  private heroesUrl = 'api/heroes';

  constructor(public messageService : MessageService, private http : HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
     this.messageService.add(`HeroService: fetched hero id=${id}`);
     
     return of(HEROES.find(hero => hero.id === id));
  }

}