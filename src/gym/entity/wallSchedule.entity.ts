import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wall } from './wall.entity';
import { BaseEntity } from '../../common/entity/base.entity';

@Entity()
export class WallSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Wall, {
    eager: true,
    nullable: false,
  })
  wall: Wall;

  @Column({
    type: 'timestamp',
  })
  settingDate: Date;
}
