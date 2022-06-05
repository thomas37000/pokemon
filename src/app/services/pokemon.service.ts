import { Injectable } from '@angular/core';
import {Type} from "../models/Type";
import { pokemonModel } from '../models/pokemonModel';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: pokemonModel[];

  constructor() {
    let pok = new pokemonModel(
      1,
      'Bulbizarre',
      'graine',
      [
        Type.plante, // new Type("plante"),
        Type.poison // new Type("poison");
      ],
      70,
      6.9
    );
    let pok1 = new pokemonModel(
      2,
      'Herbizarre',
      'graine',
      [
        Type.plante, 
        Type.poison 
      ],
      100,
      13,
    );
    let pok2 = new pokemonModel(
      3,
      'Florizarre',
      'graine',
      [
        Type.plante, 
        Type.poison 
      ],
      200,
      100,
    );
    let pok3 = new pokemonModel(
      4,
      'Salamèche',
      'lézard',
      [
        Type.feu
      ],
      60,
      8.5,
    );
    let pok4 = new pokemonModel(
      5,
      'Reptincel',
      'flamme',
      [
        Type.feu
      ],
      110,
      19,
    );
    let pok5 = new pokemonModel(
      6,
      'Dracaufeu',
      'flamme',
      [
        Type.feu,
        Type.vol
      ],
      170,
      90.5,
    );

    this.pokemons = [pok, pok1, pok2, pok3, pok4, pok5];
  }

  public getPokemons(): pokemonModel[] {
    return this.pokemons;
  }
}