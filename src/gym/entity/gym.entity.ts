import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gym {
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
