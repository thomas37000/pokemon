import { generationModel } from './generationModel';

export class pokemonModel {
  private _id: number;
  private _nom: string;
  private _categorie: string;
  private _type: string;
  // private _type: Type[];
  private _taille: number;
  private _poids: number;
  private _image: string;
  //private _generation!: generationModel;

  constructor(
    id: number,
    nom: string,
    categorie: string,
    type: string,
    taille: number,
    poids: number,
    // generation: generationModel
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
    // this._generation = generation;
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
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

  //   public toString(): string {
  //     return this.nom + ' ' + this.catégorie;
  //   }
}