import { Injectable } from '@nestjs/common';
import { Wall } from '../model/wall.model';

@Injectable()
export class WallService {
  private walls: Wall[] = [];

  findAll(): Wall[] {
    return this.walls;
  }
}
