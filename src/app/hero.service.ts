import { Injectable } from '@angular/core';
import Hero from './hero';
import { MessageService } from './message.service';
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) { }

  coutHeroSelect(hero: Hero): void {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`selected ${hero.name}`);
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
