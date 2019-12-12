import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../assets/hero';
import { HeroesService } from "../heroes.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  hero : Hero;
  id: string;
  constructor(private heroService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getHeroes(): void {
    let params = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    this.heroService.getHeroes().subscribe(heroes => this.hero = heroes[this.id]);
  }

}