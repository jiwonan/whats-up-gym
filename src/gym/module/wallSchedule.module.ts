import { Module } from '@nestjs/common';
import { WallScheduleResolver } from '../resolver/wallSchedule.resolver';
import { WallScheduleService } from '../service/wallSchedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WallSchedule } from '../entity/wallSchedule.entity';
import { Wall } from '../entity/wall.entity';
import { WallScheduleQueryService } from '../service/wallSchedule.queryService';
import { WallQueryService } from '../service/wall.queryService';

@Module({
  imports: [TypeOrmModule.forFeature([WallSchedule, Wall])],
  providers: [
    WallScheduleResolver,
    WallScheduleService,
    WallScheduleQueryService,
    WallQueryService,
  ],
})
export class WallScheduleModule {}
