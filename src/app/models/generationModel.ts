import { pokemonModel } from "./pokemonModel";

export class generationModel {

  private _id: number;
  private _nom: string;
  private _pokemons: pokemonModel[];

  constructor(id: number, nom: string) {
    this._id = id;
    this._nom = nom;
    this._pokemons = [];
  }

  public addPokemon(pokemon: pokemonModel) {
    this._pokemons.push(pokemon);
  }

  get id (): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }


  get pokemons(): pokemonModel[] {
    return this._pokemons;
  }

  set pokemons(value: pokemonModel[]) {
    this._pokemons = value;
  }
}