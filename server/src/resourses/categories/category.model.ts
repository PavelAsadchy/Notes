import { v4 as uuidv4 } from 'uuid';

export class Category {
  id: string;
  title: string;
  order: number;

  constructor({
    id = uuidv4(),
    title = 'Category Title',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this. order = order;
  }
}