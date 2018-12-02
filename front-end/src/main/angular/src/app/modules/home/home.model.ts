import {Category} from "../categories/category.model";
import {Budget} from "../budgets/budgets.model";

export class ReportData {
  category: Category;
  budget: Budget;
  sum: number = 0;
}
