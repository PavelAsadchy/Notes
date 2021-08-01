import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from './note.model';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 128 })
  title: string;

  @Column('integer')
  order: number;

  @OneToMany(() => Note, note => note.categoryId, { onDelete: 'CASCADE'})
  notes: Note[]
}