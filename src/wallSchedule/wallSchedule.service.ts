import { Injectable } from '@nestjs/common';
import { WallSchedule } from './wallSchedule.entity';

@Injectable()
export class WallScheduleService {
  private wallSchedules: WallSchedule[] = [];

  findAll(): WallSchedule[] {
    return this.wallSchedules;
  }
}
