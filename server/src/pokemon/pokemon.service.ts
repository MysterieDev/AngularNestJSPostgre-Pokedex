import { PokemonEntity } from "./pokemon.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PokemonService extends TypeOrmCrudService<PokemonEntity> {
  constructor(@InjectRepository(PokemonEntity) repo) {
    super(repo);
  }
}
