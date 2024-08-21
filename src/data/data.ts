import { category, IForminput, IProds } from "../interface";
import { v4 as uuid } from "uuid";

export const productApi: IProds[] = [
  {
    id: uuid(),
    image: "https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill",
    title: "product one",
    price: "27",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    colors: ["#1E201E"],
    category: {
      name: "frunture",
      image:
        "https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill",
    },
  },
  {
    id: uuid(),

    image: "https://via.assets.so/furniture.png?id=2&q=95&w=360&h=360&fit=fill",
    title: "product two",
    price: "28",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    colors: ["#ECDFCC"],
    category: {
      name: "frunture",
      image:
        "https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill",
    },
  },
  {
    id: uuid(),

    image: "https://via.assets.so/furniture.png?id=3&q=95&w=360&h=360&fit=fill",
    title: "product three",
    price: "29",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    colors: ["#00712D"],
    category: {
      name: "frunture",
      image:
        "https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill",
    },
  },
  {
    id: uuid(),

    image: "https://via.assets.so/furniture.png?id=4&q=95&w=360&h=360&fit=fill",
    title: "product four",
    price: "30",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    colors: ["#800000"],
    category: {
      name: "frunture",
      image:
        "https://via.assets.so/furniture.png?id=1&q=95&w=360&h=360&fit=fill",
    },
  },
];

export const formInputList: IForminput[] = [
  { id: "title", name: "title", label: "Product Title", type: "text" },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  { id: "image", name: "image", label: "Product image", type: "text" },
  { id: "price", name: "price", label: "Product price", type: "text" },
  // { id: "category", name: "category", label: "Product category", type: "text" },
];

export const colors: string[] = [
  "#1E201E",
  "#ECDFCC",
  "#00712D",
  "#FF9100",
  "#800000",
];

export const ApiCate: category[] = [
  {
    id: uuid(),
    name: "Nlike",
    image: "https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    id: uuid(),
    name: "T-shirt",
    image: "https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill",
  },
  {
    id: uuid(),
    name: "coat",
    image: "https://via.assets.so/game.png?id=3&q=95&w=360&h=360&fit=fill",
  },
];

export const categories: category[] = [
  {
    id: uuid(),
    name: "sneakers",
    image: "https://via.assets.so/shoe.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    id: uuid(),
    name: "flats",
    image: "https://via.assets.so/shoe.png?id=2&q=95&w=360&h=360&fit=fill",
  },
  {
    id: uuid(),
    name: "sports",
    image: "https://via.assets.so/shoe.png?id=3&q=95&w=360&h=360&fit=fill",
  },
];
