import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WallDto } from './wall.dto';

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
}
