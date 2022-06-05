import { Injectable } from '@angular/core';
import { generationModel } from '../models/generationModel';

@Injectable({
  providedIn: 'root',
})
export class GenerationService {
  public generations: generationModel[];

  constructor() {
    let gen = new generationModel(1, 'Génération 1');
    let gen1 = new generationModel(2, 'Génération 2');
    let gen2 = new generationModel(3, 'Génération 3');
    let gen3 = new generationModel(4, 'Génération 4');
    let gen4 = new generationModel(5, 'Génération 5');
    let gen5 = new generationModel(6, 'Génération 6');
    let gen6 = new generationModel(7, 'Génération 7');

    this.generations = [gen, gen1, gen2, gen3, gen4, gen5, gen6];
  }

  public getGenerations(): generationModel[] {
    return this.generations;
  }

  ngOnInit(): void {}
}