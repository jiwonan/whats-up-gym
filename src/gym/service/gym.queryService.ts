import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gym } from '../entity/gym.entity';
import { Repository } from 'typeorm';
import { CreateGymDto } from '../dto/createGym.dto';

@Injectable()
export class GymQueryService {
  constructor(
    @InjectRepository(Gym)
    private gymRepository: Repository<Gym>,
  ) {}

  findAll(): Promise<Gym[]> {
    return this.gymRepository.find();
  }

  find(id: number): Promise<Gym | null> {
    return this.gymRepository.findOneBy({ id: id, isDeleted: false });
  }

  async create(createGymDto: CreateGymDto): Promise<Gym> {
    const newGym = this.gymRepository.create(createGymDto);
    return this.gymRepository.save(newGym);
  }
}
