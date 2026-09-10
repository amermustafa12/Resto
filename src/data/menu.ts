export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Grilled Salmon",
    description: "Fresh caught salmon with a lemon butter glaze and seasonal vegetables.",
    price: 24.99,
    image: "/images/salmon.jpg",
    category: "Main",
  },
  {
    id: "2",
    name: "Classic Burger",
    description: "Angus beef patty, cheddar, lettuce, tomato, and our signature sauce.",
    price: 16.99,
    image: "/images/burger.jpg",
    category: "Main",
  },
  {
    id: "3",
    name: "Creamy Pasta",
    description: "Fettuccine tossed in a rich garlic parmesan cream sauce.",
    price: 18.99,
    image: "/images/pasta.jpg",
    category: "Main",
  },
  {
    id: "4",
    name: "Bruschetta",
    description: "Toasted baguette topped with fresh tomatoes, basil, and balsamic.",
    price: 9.99,
    image: "/images/bruschetta.jpg",
    category: "Starters",
  },
  {
    id: "5",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 8.99,
    image: "/images/dessert.jpg",
    category: "Desserts",
  }
];