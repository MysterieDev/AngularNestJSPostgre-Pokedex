import { Module } from "@nestjs/common";
import { AngularUniversalModule } from "@nestjs/ng-universal";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonModule } from "./src/pokemon/pokemon.module";

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), "dist/browser"),
      bundle: require("../server/main"),
      liveReload: true
    }),
    TypeOrmModule.forRoot(),
    PokemonModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class ApplicationModule {}
