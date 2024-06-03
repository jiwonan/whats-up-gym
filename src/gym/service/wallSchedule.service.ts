import { Injectable } from '@nestjs/common';
import { WallSchedule } from '../model/wallSchedule.model';

@Injectable()
export class WallScheduleService {
  private wallSchedules: WallSchedule[] = [];

  findAll(): WallSchedule[] {
    return this.wallSchedules;
  }
}
