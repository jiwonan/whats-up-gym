import { Module } from '@nestjs/common';
import { WallResolver } from '../resolver/wall.resolver';
import { WallService } from '../service/wall.service';
import { WallQueryService } from '../service/wall.queryService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wall } from '../entity/wall.entity';
import { GymQueryService } from '../service/gym.queryService';
import { Gym } from '../entity/gym.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wall, Gym])],
  providers: [WallResolver, WallService, WallQueryService, GymQueryService],
})
export class WallModule {}
