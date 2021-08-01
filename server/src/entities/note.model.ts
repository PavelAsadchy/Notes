import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.model';
import { User } from './user.model';

@Entity({ name: 'note' })
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 128 })
  title: string;

  @Column('varchar', { length: 512 })
  description: string;

  @Column('integer')
  order: number;

  @Column('boolean')
  isUrgent: boolean;

  @ManyToOne(() => User, { onDelete: 'SET NULL'})
  @JoinColumn({ name: 'userId'})
  user: User;

  @Column('text')
  userId: string;

  @ManyToOne(() => Category, category => category.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column('text')
  categoryId: string;
}
