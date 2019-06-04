import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();

  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
