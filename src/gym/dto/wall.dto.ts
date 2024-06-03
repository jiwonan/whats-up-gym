import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GymDto } from './gym.dto';
import { Wall } from '../entity/wall.entity';

@ObjectType({ description: '암장 벽' })
export class WallDto {
  @Field(() => ID)
  id: number;

  @Field(() => GymDto)
  gym: GymDto;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isDeleted: boolean;

  constructor(wall: Wall, gymDto: GymDto) {
    this.id = wall.id;
    this.name = wall.name;
    this.isDeleted = wall.isDeleted;
    this.gym = gymDto;
  }
}
