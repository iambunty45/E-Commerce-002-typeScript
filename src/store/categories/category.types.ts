export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORICE_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORICE_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORICE_FAILED = "category/FETCH_CATEGORIES_FAILED",
  SEARCH_STRING_SUCCESS = "category/SEARCH_STRAING_SUCCESS",
  SELECTED_PRICE_RANGE = "category/SELECTED_PRICE_RANGE",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
export type PriceRange = {
  value: string;
  label: string;
  startValue: number;
  endValue: number;
};
