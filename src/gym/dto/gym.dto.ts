import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Gym } from '../entity/gym.entity';

@ObjectType()
export class GymDto {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field(() => String)
  address: string;

  @Field(() => String)
  company: string;

  @Field(() => Boolean)
  isDeleted: boolean;

  constructor(gym: Gym) {
    this.id = gym.id;
    this.name = gym.name;
    this.latitude = gym.latitude;
    this.longitude = gym.longitude;
    this.address = gym.address;
    this.company = gym.company;
    this.isDeleted = gym.deletedAt !== null;
  }
}
