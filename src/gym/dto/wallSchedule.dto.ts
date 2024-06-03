import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WallDto } from './wall.dto';
import { WallSchedule } from '../entity/wallSchedule.entity';

@ObjectType({ description: '벽 세팅 스케줄' })
export class WallScheduleDto {
  @Field(() => ID)
  id: number;

  @Field(() => WallDto)
  wall: WallDto;

  @Field(() => Date)
  settingDate: Date;

  @Field(() => Boolean)
  isDeleted: boolean;

  constructor(wallSchedule: WallSchedule) {
    this.id = wallSchedule.id;
    this.wall = new WallDto(wallSchedule.wall);
    this.settingDate = wallSchedule.settingDate;
    this.isDeleted = wallSchedule.isDeleted;
  }
}
