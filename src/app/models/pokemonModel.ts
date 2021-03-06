import { generationModel } from './generationModel';
import { Type } from './Type';

export class pokemonModel {
  private _id: number;
  private _nom: string;
  private _categorie: string;
  private _type: Type[];
  private _taille: number;
  private _poids: number;
  private _image: string;
  private _generation: generationModel |  undefined;

  constructor(
    id: number,
    nom: string,
    categorie: string,
    type: Type[],
    taille: number,
    poids: number,
  ) {
    this._id = id;
    this._nom = nom;
    this._categorie = categorie;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
    //  avec cette url plus besoin de mettre chaque fois dans le pokemon service l'url de chacun
    this._image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
      id +
      '.png';
  }

  get id(): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get categorie(): string {
    return this._categorie;
  }

  set categorie(value: string) {
    this._categorie = value;
  }

  get type(): Type[] {
    return this._type;
  }

  set type(value: Type[]) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get generation(): generationModel {
    return <generationModel>this._generation;
  }

  set generation(value: generationModel) {
    this._generation = value;
  }

  //   public toString(): string {
  //     return this.nom + ' ' + this.catégorie;
  //   }
}
