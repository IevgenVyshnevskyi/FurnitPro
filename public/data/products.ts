import { Product } from "@/types";

const products: Product[] = [
  {
    id: 1,
    name: "Механізм Юніор з ребром",
    href: "/mechanism-junior-strong",
    price: "40.00 грн./шт.",
    imageSrc: {
      image: "/images/products/1.mechanism-junior-strong/item1.jpg",
      drawing: "/images/products/1.mechanism-junior-strong/item2.jpg",
    },
    imageAlt: "Junior mechanism with rib.",
    category: "mechanisms",
    thickness: "2,0 мм",
    size: "",
    type: "З ребром жорсткості",
    description:
      "Підсилений варіант механізму Юніор з ребром жорсткості. Для важчих конструкцій.",
  },
  {
    id: 2,
    name: "Механізм Юніор",
    href: "#",
    price: "38.00 грн./шт.",
    imageSrc: {
      image: "/images/products/2.mechanism-junior/item1.jpg",
      drawing: "/images/products/2.mechanism-junior/item2.jpg",
    },
    imageAlt: "Junior mechanism.",
    category: "mechanisms",
    thickness: "2,0 мм",
    size: "",
    type: "Без ребра жорсткості",
    description:
      "Меблевий підйомний механізм без ребра жорсткості. Підходить для середніх навантажень.",
  },
  {
    id: 3,
    name: "Зачіп великий",
    href: "#",
    price: "4.90 грн./шт.",
    imageSrc: {
      image: "/images/products/3.latch-large/item1.jpg",
      drawing: "/images/products/3.latch-large/item2.jpg",
    },
    imageAlt: "Big hook.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "",
    description:
      "Посилений зачіп для великих меблевих елементів. Виготовлений з оцинкованої сталі. Товщина: 1,5 мм.",
  },
  {
    id: 4,
    name: "Зачіп середній",
    href: "#",
    price: "4.50 грн./шт.",
    imageSrc: {
      image: "/images/products/4.latch-medium/item1.jpg",
      drawing: "/images/products/4.latch-medium/item2.jpg",
    },
    imageAlt: "Medium hook.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "",
    description:
      "Призначений для фіксації меблевих елементів. Матеріал: оцинкована сталь. Товщина: 1,5 мм.",
  },
  {
    id: 5,
    name: "Зачіп слайдер Н-16",
    href: "#",
    price: "9.20 грн./шт.",
    imageSrc: {
      image: "/images/products/5.latch-slider-h16/item1.jpg",
    },
    imageAlt: "Hook slider H-16.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Слайдер Н-16",
    description: "Зачіп типу слайдер для меблевих направляючих. Висота: 16 мм.",
  },
  {
    id: 6,
    name: "Зачіп слайдер Н-10",
    href: "#",
    price: "8.80 грн./шт.",
    imageSrc: {
      image: "/images/products/6.latch-slider-h10/item1.jpg",
    },
    imageAlt: "Hook slider H-10.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Слайдер Н-10",
    description: "Компактний зачіп для направляючих. Висота: 10 мм.",
  },
  {
    id: 7,
    name: "Завіса велика 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc: {
      image: "/images/products/7.hinge-large-190/item1.jpg",
      drawing: "/images/products/7.hinge-large-190/item2.jpg",
    },
    imageAlt: "Large curtain 190.",
    category: "curtains",
    thickness: "2,5 мм",
    size: "180×40×2,5 мм",
    type: "",
    description:
      "Металева меблева петля для складних конструкцій. Розмір: 180×40×2,5 мм. Матеріал: сталь.",
  },
  {
    id: 8,
    name: "Завіса мала",
    href: "#",
    price: "8.50 грн./шт.",
    imageSrc: {
      image: "/images/products/8.hinge-small/item1.jpg",
      drawing: "/images/products/8.hinge-small/item2.jpg",
    },
    imageAlt: "Small curtain.",
    category: "curtains",
    thickness: "1,8 мм",
    size: "90×40×1,8 мм",
    type: "",
    description:
      "Компактна меблева петля для точного відкривання. Розмір: 90×40×1,8 мм. Матеріал: сталь.",
  },
  {
    id: 9,
    name: "Куток 106 оцинкований",
    href: "#",
    price: "2.50 грн./шт.",
    imageSrc: {
      image: "/images/products/9.angle-106/item1.jpg",
      drawing: "/images/products/9.angle-106/item2.jpg",
    },
    imageAlt: "Corner 106 galvanized.",
    category: "corners",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "",
    description:
      "Меблевий з’єднувальний куток 106. Матеріал: оцинкована сталь. Розмір: 33×34×1,5 мм",
  },
  {
    id: 10,
    name: "Механізм Блюз",
    href: "#",
    price: "65.00 грн./шт.",
    imageSrc: {
      image: "/images/products/10.mechanism-blues/item1.jpg",
    },
    imageAlt: "Mechanism Blues.",
    category: "mechanisms",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "Пружинний",
    description:
      "Пружинний механізм для м’яких меблів. Використовується у розкладних диванах.",
  },
  {
    id: 11,
    name: "Механізм ліжковий гідравлічний",
    href: "#",
    price: "78.00 грн./шт.",
    imageSrc: {
      image: "/images/products/12.mechanism-bed/item1.jpg",
    },
    imageAlt: "Hydraulic bed mechanism.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "гідравлічний",
    description:
      "Підйомний гідравлічний механізм для ліжок. Зручний у щоденному використанні.",
  },
  {
    id: 12,
    name: "Механізм Алігатор",
    href: "#",
    price: "59.00 грн./шт.",
    imageSrc: {
      image: "/images/products/11.mechanism-alligator/item1.jpg",
    },
    imageAlt: "Mechanism Alligator.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Механізм трансформації меблів білого кольору. Підходить для компактних конструкцій. Колір: білий.",
  },
  {
    id: 13,
    name: "Механізм Євро-Книжка",
    href: "#",
    price: "72.00 грн./шт.",
    imageSrc: {
      image: "/images/products/13.mechanism-eurobook/item1.jpg",
    },
    imageAlt: "Mechanism Euro-Book.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Механізм для трансформації диванів у положення 'ліжко'. Колір: білий.",
  },
];

export default products;
