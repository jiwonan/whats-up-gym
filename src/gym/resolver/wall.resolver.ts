import { Query, Resolver } from '@nestjs/graphql';
import { WallService } from '../service/wall.service';
import { Wall } from '../model/wall.model';

@Resolver()
export class WallResolver {
  constructor(private readonly wallService: WallService) {}

  @Query(() => [Wall])
  walls() {
    return this.wallService.findAll();
  }
}
