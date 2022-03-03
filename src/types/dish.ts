type Pizza = {
  type: "pizza";
  diameter: number;
  no_of_slices: number;
};

type Soup = {
  type: "soup";
  spiciness_scale: number;
};

type Sandwich = {
  type: "sandwich";
  slices_of_bread: number;
};

export type Dish = { name: string; preparation_time: string } & (
  | Pizza
  | Sandwich
  | Soup
);
