import { Query, Resolver } from '@nestjs/graphql';
import { WallService } from './wall.service';
import { Wall } from './wall.entity';

@Resolver()
export class WallResolver {
  constructor(private readonly wallService: WallService) {}

  @Query(() => [Wall])
  walls() {
    return this.wallService.findAll();
  }
}
