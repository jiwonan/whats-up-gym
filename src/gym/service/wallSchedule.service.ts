import { Injectable } from '@nestjs/common';
import { WallScheduleDto } from '../dto/wallSchedule.dto';
import { WallScheduleQueryService } from './wallSchedule.queryService';
import { WallQueryService } from './wall.queryService';
import { EntityNotFoundError } from 'typeorm';
import { Wall } from '../entity/wall.entity';
import { CreateWallScheduleDto } from '../dto/createWallSchedule.dto';

@Injectable()
export class WallScheduleService {
  constructor(
    private readonly wallScheduleQueryService: WallScheduleQueryService,
    private readonly wallQueryService: WallQueryService,
  ) {}

  async findAll(): Promise<WallScheduleDto[]> {
    const schedules = await this.wallScheduleQueryService.findAllWithWall();
    return schedules.map((schedule) => {
      return new WallScheduleDto(schedule);
    });
  }

  async getWallSchedulesInTerm(
    startDate: Date,
    endDate: Date,
  ): Promise<WallScheduleDto[]> {
    const schedules =
      await this.wallScheduleQueryService.findAllBySettingDateBetween(
        startDate,
        endDate,
      );

    console.log(schedules);

    return schedules.map((schedule) => {
      return new WallScheduleDto(schedule);
    });
  }

  async createWallSchedule(
    wallId: number,
    settingDate: Date,
  ): Promise<WallScheduleDto> {
    const wall = await this.wallQueryService.find(wallId);

    if (wall === null) {
      throw new EntityNotFoundError(Wall, `${wallId}번 벽을 찾을 수 없습니다.`);
    }

    const createWallScheduleDto = new CreateWallScheduleDto(wall, settingDate);
    const newWallSchedule = await this.wallScheduleQueryService.create(
      createWallScheduleDto,
    );
    return new WallScheduleDto(newWallSchedule);
  }
}
