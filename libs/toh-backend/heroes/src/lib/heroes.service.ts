import { Injectable } from '@nestjs/common';

import {PrismaService} from "@tour-of-heroes/toh-backend/core";

import {Hero} from "./hero.model";

@Injectable()
export class HeroesService {

  constructor(private prisma: PrismaService){
  }

  async getHeroes(): Promise<Hero[]> {
    return this.prisma.hero.findMany();
  }
}
