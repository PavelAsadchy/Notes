import { v4 as uuidv4 } from 'uuid';

export class Note {
  id: string;
  title: string;
  order: number;
  description: string;
  isUrgent: boolean;
  userId: string;
  categoryId: string;

  constructor({
    id = uuidv4(),
    title = 'TASK',
    order = 0,
    description = 'Description',
    isUrgent = false,
    userId = '',
    categoryId = ''
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.isUrgent = isUrgent;
    this.userId = userId;
    this.categoryId = categoryId;
  }
}
