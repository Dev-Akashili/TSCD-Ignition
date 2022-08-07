import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diseaseTerm: string;

  @Column()
  title: string;
}
