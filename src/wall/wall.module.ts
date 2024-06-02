import { Module } from '@nestjs/common';
import { WallResolver } from './wall.resolver';
import { WallService } from './wall.service';

@Module({
  providers: [WallResolver, WallService],
})
export class WallModule {}
