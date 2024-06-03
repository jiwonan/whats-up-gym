import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';

@Entity()
export class Gym extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  @Column({
    type: 'float',
  })
  latitude: number;

  @Column({
    type: 'float',
  })
  longitude: number;

  @Column({
    type: 'varchar',
    length: 250,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  company: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;
}
