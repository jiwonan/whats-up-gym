import { Query, Resolver } from '@nestjs/graphql';
import { WallScheduleService } from '../service/wallSchedule.service';
import { WallSchedule } from '../model/wallSchedule.model';

@Resolver()
export class WallScheduleResolver {
  constructor(private readonly wallScheduleService: WallScheduleService) {}

  @Query(() => [WallSchedule])
  wallSchedules() {
    return this.wallScheduleService.findAll();
  }
}
