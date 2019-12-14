import { Injectable } from '@angular/core';
import { Hero } from '../assets/hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const heroes = [
      { id: 11, name: 'Dr Nice', description: "Lorem ipslum" },
      { id: 12, name: 'Narco', description: "Lorem ipslum" },
      { id: 13, name: 'Bombasto', description: "Lorem ipslum" },
      { id: 14, name: 'Celeritas', description: "Lorem ipslum" },
      { id: 15, name: 'Magneta', description: "Lorem ipslum" },
      { id: 16, name: 'RubberMan', description: "Lorem ipslum" },
      { id: 17, name: 'Dynama', description: "Lorem ipslum" },
      { id: 18, name: 'Dr IQ', description: "Lorem ipslum" },
      { id: 19, name: 'Magma', description: "Lorem ipslum" },
      { id: 20, name: 'Tornado', description: "Lorem ipslum" }
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}