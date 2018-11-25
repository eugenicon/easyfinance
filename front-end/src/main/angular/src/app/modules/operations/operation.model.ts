import {Category} from "../categories/category.model";

export class Operation {
  id: number = 0;
  category: Category = null;
  description: string = "";
  sum: number = 0;
}
