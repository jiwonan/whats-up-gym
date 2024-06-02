import { Query, Resolver } from '@nestjs/graphql';
import { WallScheduleService } from './wallSchedule.service';
import { WallSchedule } from './wallSchedule.entity';

@Resolver()
export class WallScheduleResolver {
  constructor(private readonly wallScheduleService: WallScheduleService) {}

  @Query(() => [WallSchedule])
  wallSchedules() {
    return this.wallScheduleService.findAll();
  }
}
