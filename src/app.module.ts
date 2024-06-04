import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as process from 'process';
import { join } from 'path';
import { DateScalar } from './scalars/date.scalar';
import { GymModule } from './gym/module/gym.module';
import { WallModule } from './gym/module/wall.module';
import { WallScheduleModule } from './gym/module/wallSchedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './config/typeorm.config';
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        getTypeOrmConfig(configService),
      inject: [ConfigService],
    }),
    GymModule,
    WallModule,
    WallScheduleModule,
  ],
  controllers: [AppController],
  providers: [DateScalar],
})
export class AppModule {}
