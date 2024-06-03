import { Query, Resolver } from '@nestjs/graphql';
import { GymService } from '../service/gym.service';
import { Gym } from '../model/gym.model';

@Resolver()
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  @Query(() => [Gym])
  gyms() {
    return this.gymService.findAll();
  }
}
