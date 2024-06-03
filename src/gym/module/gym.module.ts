import { Module } from '@nestjs/common';
import { GymService } from '../service/gym.service';
import { GymResolver } from '../resolver/gym.resolver';
import { GymQueryService } from '../service/gym.queryService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gym } from '../entity/gym.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gym])],
  providers: [GymService, GymQueryService, GymResolver],
})
export class GymModule {}
