import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HEROES } from '../assets/heroes';
import { Hero } from '../assets/hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroesService {

  private heroesUrl = 'api/heroes';

  constructor(public messageService : MessageService, private http : HttpClient) { }

  private handleError<T>(operation = 'operation', result ? : T) {
    return (error: any) : Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
        tap(_ => this.log('Fetching heroes...')),
        catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
     const url = `${this.heroesUrl}/${id}`;
     return this.http.get<Hero>(url).pipe(
       tap(_ => this.log(`fetching hero id = ${id}`)),
       catchError(this.handleError<Hero>(`getHero id = ${id}`))
     );
  }

  updateHero(hero : Hero): Observable<Hero> {
    return this.http.put(this.heroesUrl, hero, {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      tap(_ => this.log(`Update hero id = ${hero.id}`)),
      catchError(this.handleError<any>(`Update herro failed at id = ${hero.id}`))
    );
  }

}