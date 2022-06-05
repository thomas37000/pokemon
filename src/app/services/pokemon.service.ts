import { Injectable } from '@angular/core';
import { Type } from '../models/Type';
import { pokemonModel } from '../models/pokemonModel';
import { generationModel } from '../models/generationModel';

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
        Type.poison, // new Type("poison");
      ],
      70,
      6.9
    );

    let pok1 = new pokemonModel(
      2,
      'Herbizarre',
      'graine',
      [Type.plante, Type.poison],
      100,
      13
    );
    let pok2 = new pokemonModel(
      3,
      'Florizarre',
      'graine',
      [Type.plante, Type.poison],
      200,
      100
    );
    let pok3 = new pokemonModel(4, 'Salamèche', 'lézard', [Type.feu], 60, 8.5);
    let pok4 = new pokemonModel(5, 'Reptincel', 'flamme', [Type.feu], 110, 19);
    let pok5 = new pokemonModel(
      6,
      'Dracaufeu',
      'flamme',
      [Type.feu, Type.vol],
      170,
      90.5
    );

    let generation1 = new generationModel(1, "'Génération 1'"); // Une nouvelle generation
    generation1.addPokemon(pok); // J'ajoute le pokemon a la generation
    pok.generation = generation1; // J'ajoute la generation au pokemon

    let generation2 = new generationModel(1, "'Génération 2'");
    generation2.addPokemon(pok1);
    pok1.generation = generation2;

    let generation3 = new generationModel(1, "'Génération 3");
    generation3.addPokemon(pok2);
    pok2.generation = generation3;

    let generation4 = new generationModel(1, "'Génération 4'");
    generation4.addPokemon(pok3);
    pok3.generation = generation4;

    let generation5 = new generationModel(1, "'Génération 5'");
    generation5.addPokemon(pok4);
    pok4.generation = generation5;

    let generation6 = new generationModel(1, "'Génération 6'");
    generation6.addPokemon(pok5);
    pok5.generation = generation6;

    this.pokemons = [pok, pok1, pok2, pok3, pok4, pok5];
   // this.pokemons.push(pok, pok2, pok3, pok4, pok4, pok5); // J'ajoute les pokemons au tableau
  }

  public getPokemons(): pokemonModel[] {
    return this.pokemons;
  }
}
