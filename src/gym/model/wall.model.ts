import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Gym } from './gym.model';

@ObjectType({ description: '암장 벽' })
export class Wall {
  @Field((type) => ID)
  id: number;

  @Field((type) => Gym)
  gym: Gym;

  @Field((type) => String)
  name: string;

  @Field((type) => Boolean)
  isDeleted: boolean;
}
