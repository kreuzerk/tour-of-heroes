import { Module } from '@nestjs/common';

import {TohBackendCoreModule} from "@tour-of-heroes/toh-backend/core";

import {HeroesController} from "./heroes.controller";
import { HeroesService } from './heroes.service';

@Module({
  imports: [TohBackendCoreModule],
  controllers: [HeroesController],
  providers: [HeroesService]
})
export class TohBackendHeroesModule {}
