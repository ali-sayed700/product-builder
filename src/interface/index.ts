export type productsProps = "title" | "description" | "image" | "price";

export interface IProds {
  id?: string;
  title: string;
  description: string;
  price: string;
  image: string;
  colors: string[];
  category: { name: string; image: string };
}

export interface IForminput {
  id: string;
  name: productsProps;
  label: string;
  type: string;
}

export interface category {
  id: string;
  name: string;
  image: string;
}
