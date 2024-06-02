import { Module } from '@nestjs/common';
import { WallScheduleResolver } from './wallSchedule.resolver';
import { WallScheduleService } from './wallSchedule.service';

@Module({
  providers: [WallScheduleResolver, WallScheduleService],
})
export class WallScheduleModule {}
