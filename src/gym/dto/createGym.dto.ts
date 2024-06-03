import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGymDto {
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
}
