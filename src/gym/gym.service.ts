import { Injectable } from '@nestjs/common';
import { Gym } from './gym.entity';

@Injectable()
export class GymService {
  private gyms: Gym[] = [];

  findAll(): Gym[] {
    return this.gyms;
  }
}
