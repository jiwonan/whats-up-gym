import { Injectable } from '@nestjs/common';
import { WallDto } from '../dto/wall.dto';
import { WallQueryService } from './wall.queryService';
import { GymQueryService } from './gym.queryService';
import { EntityNotFoundError } from 'typeorm';
import { Gym } from '../entity/gym.entity';
import { CreateWallDto } from '../dto/createWall.dto';
import { GymDto } from '../dto/gym.dto';

@Injectable()
export class WallService {
  constructor(
    private readonly wallQueryService: WallQueryService,
    private readonly gymQueryService: GymQueryService,
  ) {}

  async findAll(): Promise<WallDto[]> {
    const walls = await this.wallQueryService.findAllWithGym();
    return walls.map((wall) => {
      return new WallDto(wall, new GymDto(wall.gym));
    });
  }

  async createWall(gymId: number, wallName: string): Promise<WallDto> {
    const gym = await this.gymQueryService.find(gymId);
    if (gym === null) {
      throw new EntityNotFoundError(
        Gym,
        `${gymId}번 암장이 존재하지 않습니다.`,
      );
    }

    const createWallDto = new CreateWallDto(gym, wallName);
    const newWall = await this.wallQueryService.create(createWallDto);

    return new WallDto(newWall, new GymDto(gym));
  }
}
