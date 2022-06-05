import { pokemonModel } from "./pokemonModel";

export class generationModel {
  //private _pokemon: pokemonModel;

  private _id: number;
  private _nom: string;
  // private _pokemons!: pokemonModel[];

  constructor(id: number, nom: string) {
    this._id = id;
    this._nom = nom;
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
}