import { InjectRepository } from '@nestjs/typeorm';
import { Wall } from '../entity/wall.entity';
import { Repository } from 'typeorm';
import { CreateWallDto } from '../dto/createWall.dto';

export class WallQueryService {
  constructor(
    @InjectRepository(Wall)
    private wallRepository: Repository<Wall>,
  ) {}

  findAll(): Promise<Wall[]> {
    return this.wallRepository.find();
  }

  find(id: number): Promise<Wall | null> {
    return this.wallRepository.findOneBy({ id: id, isDeleted: false });
  }

  async create(createWallDto: CreateWallDto): Promise<Wall> {
    const newWall = this.wallRepository.create(createWallDto);
    return this.wallRepository.save(newWall);
  }
}
