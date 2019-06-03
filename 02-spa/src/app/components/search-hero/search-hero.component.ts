import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
    });

  }


  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
