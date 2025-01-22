import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,  UpdateDateColumn} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ unique: true })
  name: string;

  @Column('float')
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  lastModified: Date;
}
