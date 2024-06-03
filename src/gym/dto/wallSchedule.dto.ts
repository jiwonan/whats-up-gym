import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WallDto } from './wall.dto';

@ObjectType({ description: '벽 세팅 스케줄' })
export class WallScheduleDto {
  @Field((type) => ID)
  id: number;

  @Field((type) => WallDto)
  wall: WallDto;

  @Field((type) => Date)
  settingDate: Date;

  @Field((type) => Boolean)
  isDeleted: boolean;
}
