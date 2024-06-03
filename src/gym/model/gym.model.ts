import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Gym {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => Float)
  latitude: number;

  @Field((type) => Float)
  longitude: number;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  company: string;

  @Field((type) => Boolean)
  isDeleted: boolean;
}
