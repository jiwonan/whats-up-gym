import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WallSchedule } from '../entity/wallSchedule.entity';
import { CreateWallScheduleDto } from '../dto/createWallSchedule.dto';

@Injectable()
export class WallScheduleQueryService {
  constructor(
    @InjectRepository(WallSchedule)
    private wallScheduleRepository: Repository<WallSchedule>,
  ) {}

  findAllWithWall(): Promise<WallSchedule[]> {
    return this.wallScheduleRepository.find();
  }

  findAllBySettingDateBetween(
    startDate: Date,
    endDate: Date,
  ): Promise<WallSchedule[]> {
    return this.wallScheduleRepository
      .createQueryBuilder('wall-schedule')
      .leftJoinAndSelect('wall-schedule.wall', 'wall')
      .leftJoinAndSelect('wall.gym', 'gym')
      .where('wall-schedule.settingDate BETWEEN :startDate AND :endDate', {
        startDate: startDate,
        endDate: endDate,
      })
      .getMany();
  }

  async create(
    createWallScheduleDto: CreateWallScheduleDto,
  ): Promise<WallSchedule> {
    const newWallSchedule = this.wallScheduleRepository.create(
      createWallScheduleDto,
    );
    return this.wallScheduleRepository.save(newWallSchedule);
  }
}
