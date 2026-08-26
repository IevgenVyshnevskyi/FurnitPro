// Файл: src/types.ts

export interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: {
    image: string;
    drawing?: string;
  };
  imageAlt: string;
  category: string;
  thickness: string;
  size: string;
  type: string;
  description: string;
}
