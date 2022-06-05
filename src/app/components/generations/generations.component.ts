import { Component, OnInit } from '@angular/core';
import { generationModel } from 'src/app/models/generationModel';
import { GenerationService } from 'src/app/services/generation.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  public generations : generationModel[];

  constructor(private svc: GenerationService) { 
    this.generations = this.svc.getGenerations();
  }

  ngOnInit(): void {
  }

  // quand on clique sur generation 1 par exemple
  // on affiche tous les pokémons de cette génération
  public pokemonByGeneration():void{

  }

}