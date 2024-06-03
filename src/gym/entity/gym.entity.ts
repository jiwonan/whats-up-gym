import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  address: string;

  @Column()
  company: string;

  @Column()
  isDeleted: boolean;
}
