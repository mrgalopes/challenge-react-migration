export type FoodEditable = {
  name: string;
  image: string;
  price: number;
  description: string;
};

export type FoodType = FoodEditable & {
  id: number;
  available: boolean;
};
