import { Module } from '@nestjs/common';
import { WallResolver } from '../resolver/wall.resolver';
import { WallService } from '../service/wall.service';

@Module({
  providers: [WallResolver, WallService],
})
export class WallModule {}
