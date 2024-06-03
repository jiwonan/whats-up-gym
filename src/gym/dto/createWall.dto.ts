import { Field, InputType } from '@nestjs/graphql';
import { Gym } from '../entity/gym.entity';

@InputType()
export class CreateWallDto {
  @Field(() => Gym)
  gym: Gym;

  @Field(() => String)
  name: string;

  constructor(gym: Gym, name: string) {
    this.gym = gym;
    this.name = name;
  }
}
