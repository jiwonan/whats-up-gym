import { InjectRepository } from '@nestjs/typeorm';
import { Wall } from '../entity/wall.entity';
import { Repository } from 'typeorm';
import { CreateWallDto } from '../dto/createWall.dto';

export class WallQueryService {
  constructor(
    @InjectRepository(Wall)
    private wallRepository: Repository<Wall>,
  ) {}

  findAllWithGym(): Promise<Wall[]> {
    return this.wallRepository
      .createQueryBuilder('wall')
      .leftJoinAndSelect('wall.gym', 'gym')
      .getMany();
  }

  async create(createWallDto: CreateWallDto): Promise<Wall> {
    const newWall = this.wallRepository.create(createWallDto);
    return this.wallRepository.save(newWall);
  }
}
