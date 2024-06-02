import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as process from 'process';
import { join } from 'path';
import { HelloResolver } from './hello.resolver';
import { DateScalar } from './scalars/date.scalar';
import { GymModule } from './gym/gym.module';
import { WallModule } from './wall/wall.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    GymModule,
    WallModule,
  ],
  providers: [HelloResolver, DateScalar],
})
export class AppModule {}
