import {Controller, Get, Param} from '@nestjs/common';

import {HeroesService} from "./heroes.service";
import {Hero} from "./hero.model";

@Controller('heroes')
export class HeroesController {

  constructor(private heroesService: HeroesService) {
  }

  @Get()
  public async getHeroes(): Promise<Hero[]> {
    return await this.heroesService.getHeroes();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} hero`;
  }
}
