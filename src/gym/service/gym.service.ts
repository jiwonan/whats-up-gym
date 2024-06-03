import { Injectable } from '@nestjs/common';
import { GymDto } from '../dto/gym.dto';
import { GymQueryService } from './gym.queryService';
import { CreateGymDto } from '../dto/createGym.dto';

@Injectable()
export class GymService {
  constructor(private readonly gymRepository: GymQueryService) {}

  async findAll(): Promise<GymDto[]> {
    const gyms = await this.gymRepository.findAll();
    return gyms.map((gym) => new GymDto(gym));
  }

  async create(createGymDto: CreateGymDto): Promise<GymDto> {
    const newGym = await this.gymRepository.create(createGymDto);
    return new GymDto(newGym);
  }
}
