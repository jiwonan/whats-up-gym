import { Field, InputType } from '@nestjs/graphql';
import { Wall } from '../entity/wall.entity';

@InputType()
export class CreateWallScheduleDto {
  @Field(() => Wall)
  wall: Wall;

  @Field(() => Date)
  settingDate: Date;

  constructor(wall: Wall, settingDate: Date) {
    this.wall = wall;
    this.settingDate = settingDate;
  }
}
