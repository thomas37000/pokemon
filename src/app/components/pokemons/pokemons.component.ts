import { Component, OnInit } from '@angular/core';
import { pokemonModel } from 'src/app/models/pokemonModel';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css', "../../app.component.css"],
})
export class PokemonsComponent implements OnInit {
  public pokemons: pokemonModel[];

  constructor(private svc: PokemonService) {
    this.pokemons = this.svc.getPokemons();
  }

  ngOnInit(): void {}
}