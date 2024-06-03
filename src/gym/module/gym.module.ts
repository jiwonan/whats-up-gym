import { Module } from '@nestjs/common';
import { GymService } from '../service/gym.service';
import { GymResolver } from '../resolver/gym.resolver';

@Module({
  providers: [GymService, GymResolver],
})
export class GymModule {}
