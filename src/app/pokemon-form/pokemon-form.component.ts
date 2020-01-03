import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.scss"]
})
export class PokemonFormComponent implements OnInit {
  types = ["electric", "water", "ground"];
  pokemon = new Pokemon("name", "ground");
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    this.http
      .post("http://localhost:4200/api/pokemon", this.pokemon, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .subscribe(res => console.log(res));
  }
}
