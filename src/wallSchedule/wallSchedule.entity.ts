import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Wall } from '../wall/wall.entity';

@ObjectType({ description: '벽 세팅 스케줄' })
export class WallSchedule {
  @Field((type) => ID)
  id: number;

  @Field((type) => Wall)
  wall: Wall;

  @Field((type) => Date)
  settingDate: Date;

  @Field((type) => Boolean)
  isDeleted: boolean;
}
