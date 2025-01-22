import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ unique: true })
  name: string;

  @Column()
  location: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  lastModified: Date;
}
