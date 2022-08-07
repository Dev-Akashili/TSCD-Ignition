import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collectionId: number;

  @Column()
  donorCount: string;

  @Column()
  materialType: string;

  @Column()
  lastUpdated: string;
}
