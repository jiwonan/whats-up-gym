import { Injectable } from '@nestjs/common';
import { WallDto } from '../dto/wall.dto';

@Injectable()
export class WallService {
  private walls: WallDto[] = [];

  findAll(): WallDto[] {
    return this.walls;
  }
}
