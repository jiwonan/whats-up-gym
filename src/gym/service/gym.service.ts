import { Injectable } from '@nestjs/common';
import { Gym } from '../model/gym.model';

@Injectable()
export class GymService {
  private gyms: Gym[] = [];

  findAll(): Gym[] {
    return this.gyms;
  }
}
