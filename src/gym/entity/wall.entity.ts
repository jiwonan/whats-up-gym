import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gym } from './gym.entity';
import { BaseEntity } from '../../common/entity/base.entity';

@Entity()
export class Wall extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // ManyToOne은 relationId만 지정한다면 단독으로 존재할 수 있다.
  // 하지만 OneToMany는 반드시 ManyToOne이 정의되어있어야 지정 가능하다.
  @ManyToOne(() => Gym, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  gym: Gym;

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;
}
