import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GymDto } from './gym.dto';

@ObjectType({ description: '암장 벽' })
export class WallDto {
  @Field((type) => ID)
  id: number;

  @Field((type) => GymDto)
  gym: GymDto;

  @Field((type) => String)
  name: string;

  @Field((type) => Boolean)
  isDeleted: boolean;
}
