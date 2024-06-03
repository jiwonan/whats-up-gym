import { Query, Resolver } from '@nestjs/graphql';
import { WallService } from '../service/wall.service';
import { WallDto } from '../dto/wall.dto';

@Resolver()
export class WallResolver {
  constructor(private readonly wallService: WallService) {}

  @Query(() => [WallDto])
  walls() {
    return this.wallService.findAll();
  }
}
