import { Injectable } from '@nestjs/common';
import { WallScheduleDto } from '../dto/wallSchedule.dto';

@Injectable()
export class WallScheduleService {
  private wallSchedules: WallScheduleDto[] = [];

  findAll(): WallScheduleDto[] {
    return this.wallSchedules;
  }
}
