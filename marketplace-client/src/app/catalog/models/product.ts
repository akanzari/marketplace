import { Category } from './category';
import { Image } from './image';

export class Product {
  id: string;
  name: string;
  description: string;
  price: string;
  categories: Category[];
  media: Image[];
}