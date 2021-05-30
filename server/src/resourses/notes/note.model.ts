import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;

  constructor({
    id = uuidv4(),
    title = 'TASK',
    order = 0,
    description = 'Description',
    userId = '',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
  }
}
