import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { join } from 'path';

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  ssl: {
    // 다운로드한 인증서 파일 경로 추가
    ca: fs.readFileSync(join(process.cwd(), 'global-bundle.pem')),
  },
  extra: {
    // SSL 연결을 강제 설정
    ssl: { rejectUnauthorized: false },
  },
});
