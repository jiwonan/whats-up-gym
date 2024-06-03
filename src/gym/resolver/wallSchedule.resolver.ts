import { Query, Resolver } from '@nestjs/graphql';
import { WallScheduleService } from '../service/wallSchedule.service';
import { WallScheduleDto } from '../dto/wallSchedule.dto';

@Resolver()
export class WallScheduleResolver {
  constructor(private readonly wallScheduleService: WallScheduleService) {}

  @Query(() => [WallScheduleDto])
  wallSchedules() {
    return this.wallScheduleService.findAll();
  }
}
