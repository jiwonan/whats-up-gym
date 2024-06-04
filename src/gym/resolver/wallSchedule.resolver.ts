import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WallScheduleService } from '../service/wallSchedule.service';
import { WallScheduleDto } from '../dto/wallSchedule.dto';

@Resolver()
export class WallScheduleResolver {
  constructor(private readonly wallScheduleService: WallScheduleService) {}

  @Query(() => [WallScheduleDto])
  wallSchedules() {
    return this.wallScheduleService.findAll();
  }

  @Query(() => [WallScheduleDto])
  wallSchedulesInTerm(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
  ): Promise<WallScheduleDto[]> {
    return this.wallScheduleService.getWallSchedulesInTerm(startDate, endDate);
  }

  @Mutation(() => WallScheduleDto)
  createWallSchedule(
    @Args('wallId', { type: () => Int }) wallId: number,
    @Args('settingDate', { type: () => Date }) settingDate: Date,
  ): Promise<WallScheduleDto> {
    return this.wallScheduleService.createWallSchedule(wallId, settingDate);
  }
}
