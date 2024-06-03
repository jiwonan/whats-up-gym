import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GymDto } from './gym.dto';

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
}
