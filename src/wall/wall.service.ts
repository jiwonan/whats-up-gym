import { Injectable } from '@nestjs/common';
import { Wall } from './wall.entity';

@Injectable()
export class WallService {
  private walls: Wall[] = [];

  findAll(): Wall[] {
    return this.walls;
  }
}
