import { Query, Resolver } from '@nestjs/graphql';
import { Gym } from './gym.entity';
import { GymService } from './gym.service';

@Resolver()
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  @Query(() => [Gym])
  gyms() {
    return this.gymService.findAll();
  }
}
