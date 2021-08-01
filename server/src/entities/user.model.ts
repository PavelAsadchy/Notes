import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 128 })
  name: string;

  @Column('varchar', { length: 128 })
  login: string;

  @Column('varchar', { length: 128 })
  password?: string;

  @BeforeInsert()
  async hashPassword?(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  static toResponse(user: User): User {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
