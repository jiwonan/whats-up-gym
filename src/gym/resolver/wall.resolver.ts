import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WallService } from '../service/wall.service';
import { WallDto } from '../dto/wall.dto';

@Resolver()
export class WallResolver {
  constructor(private readonly wallService: WallService) {}

  @Query(() => [WallDto])
  walls() {
    return this.wallService.findAll();
  }

  @Mutation(() => WallDto)
  createWall(
    @Args('gymId', { type: () => Int }) gymId: number,
    @Args('wallName', { type: () => String }) wallName: string,
  ): Promise<WallDto> {
    return this.wallService.createWall(gymId, wallName);
  }
}
