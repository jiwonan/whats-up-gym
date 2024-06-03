import { Module } from '@nestjs/common';
import { WallScheduleResolver } from '../resolver/wallSchedule.resolver';
import { WallScheduleService } from '../service/wallSchedule.service';

@Module({
  providers: [WallScheduleResolver, WallScheduleService],
})
export class WallScheduleModule {}
