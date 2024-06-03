import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GymService } from '../service/gym.service';
import { GymDto } from '../dto/gym.dto';
import { CreateGymDto } from '../dto/createGym.dto';

@Resolver()
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  @Query(() => [GymDto])
  gyms() {
    return this.gymService.findAll();
  }

  @Mutation(() => GymDto)
  async createGym(
    @Args('createGymDto') createGymDto: CreateGymDto,
  ): Promise<GymDto> {
    return this.gymService.create(createGymDto);
  }
}
