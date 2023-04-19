import { Module } from "@nestjs/common";

import {TohBackendHeroesModule} from "@tour-of-heroes/toh-backend/heroes";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [TohBackendHeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
