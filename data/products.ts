export interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  thickness: string;
  size: string;
  type: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Механізм Юніор з ребром",
    href: "/mechanism-junior-strong",
    price: "40.00 грн./шт.",
    imageSrc: "/images/products/1.mechanism-junior-strong/item1.jpg",
    imageAlt: "Junior mechanism with rib",
    category: "mechanisms",
    thickness: "2,0мм",
    size: "",
    type: "З ребром жорсткості",
    description:
      "Підсилений варіант механізму Юніор з ребром жорсткості. Для важчих конструкцій.",
  },
  /*     {
    id: 1,
    name: "Junior mechanism with rib",
    href: "/mechanism-junior-strong",
    price: "₴40.00",
    imageSrc: "/images/products/1.mechanism-junior-strong/item1.jpg",
    imageAlt: "Furniture lifting mechanism without stiffener.",
    category: "mechanisms",
    thickness: "2,0мм",
    size: "",
    type: "With stiffening rib",
    description: "Reinforced version of the Junior mechanism with a stiffening rib. For heavier structures.",
    
  }, */
  {
    id: 2,
    name: "Mеханізм Юніор",
    href: "#",
    price: "38.00 грн./шт.",
    imageSrc: "/images/products/2.mechanism-junior/item1.jpg",
    imageAlt: "Механізм меблевий підйомний без ребра жорсткості.",
    category: "mechanisms",
    thickness: "2,0 мм",
    size: "",
    type: "Без ребра жорсткості",
    description:
      "Меблевий підйомний механізм без ребра жорсткості. Підходить для середніх навантажень.",
  },
  /*     {
    id: 2,
    name: "Mechanism Junior",
    href: "#",
    price: "38.00 грн./шт.",
    imageSrc:
      "/images/products/2.mechanism-junior/item2.jpg",
    imageAlt:
      "Furniture lifting mechanism without stiffener.",
    category: "mechanisms",
    thickness: "2,0 мм",
    size: "",
    type: "Without stiffening rib",
    description: "Furniture lifting mechanism without stiffener. Suitable for medium loads.",
  }, */
  {
    id: 3,
    name: "Зачіп великий",
    href: "#",
    price: "4.90 грн./шт.",
    imageSrc: "/images/products/3.latch-large/item1.jpg",
    imageAlt: "Зачіп посилений для великих меблевих елементів.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "",
    description:
      "Посилений зачіп для великих меблевих елементів. Виготовлений з оцинкованої сталі. Товщина: 1,5 мм.",
  },
  /*    {
    id: 3,
    name: "Big hook",
    href: "#",
    price: "4.90 грн./шт.",
    imageSrc:
      "/images/products/3.latch-large/item1.jpg",
    imageAlt:
      "The hook is reinforced for large furniture elements.",
          thickness: "1,5 мм",
    category: "hooks",
    size: "",
    type: "",
    description:
      "Reinforced hook for large furniture elements. Made of galvanized steel. Thickness: 1.5 mm.",
  }, */
  {
    id: 4,
    name: "Зачіп середній",
    href: "#",
    price: "4.50 грн./шт.",
    imageSrc: "/images/products/4.latch-medium/item1.jpg",
    imageAlt: "Призначений для фіксації меблевих елементів.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "",
    description:
      "Призначений для фіксації меблевих елементів. Матеріал: оцинкована сталь. Товщина: 1,5 мм.",
  },
  /*     {
    id: 4,
    name: "Medium hook",
    href: "#",
    price: "4.50 грн./шт.",
    imageSrc: "/images/products/4.latch-medium/item2.jpg",
    imageAlt:
      "Designed for fixing furniture elements.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "",
    description:
      "Призначений для фіксації меблевих елементів. Матеріал: оцинкована сталь. Товщина: 1,5 мм.",
  }, */

  {
    id: 5,
    name: "Зачіп слайдер Н-16",
    href: "#",
    price: "9.20 грн./шт.",
    imageSrc: "/images/products/5.latch-slider-h16/item1.jpg",
    imageAlt: "Зачіп типу слайдер для меблевих направляючих.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Слайдер Н-16",
    description: "Зачіп типу слайдер для меблевих направляючих. Висота: 16 мм.",
  },
  /*     {
    id: 5,
    name: "Hook slider Н-16",
    href: "#",
    price: "9.20 грн./шт.",
    imageSrc:
      "/images/products/5.latch-slider-h16/item2.jpg",
    imageAlt:
      "Slider type hook for furniture guides.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Slider H-16",
    description:
      "Slider type hook for furniture guides. Height: 16 mm.",
  }, */
  {
    id: 6,
    name: "Зачіп слайдер Н-10",
    href: "#",
    price: "8.80 грн./шт.",
    imageSrc: "/images/products/6.latch-slider-h10/item1.jpg",
    imageAlt: "Компактний зачіп для направляючих.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Слайдер Н-10",
    description: "Компактний зачіп для направляючих. Висота: 10 мм.",
  },
  /*     {
    id: 6,
    name: "Hook slider Н-10",
    href: "#",
    price: "8.80 грн./шт.",
    imageSrc:
      "/images/products/6.latch-slider-h10/item1.jpg",
    imageAlt:
      "Compact hook for guides.",
    category: "hooks",
    thickness: "1,5 мм",
    size: "",
    type: "Слайдер Н-10",
    description:
      "Compact hook for rails. Height: 10 mm.",
  }, */
  {
    id: 7,
    name: "Завіса велика 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc: "/images/products/7.hinge-large-190/item1.jpg",
    imageAlt: "Металева меблева петля для складних конструкцій.",
    category: "curtains",
    thickness: "2,5 мм",
    size: "180×40×2,5 мм",
    type: "Слайдер Н-10",
    description:
      "Металева меблева петля для складних конструкцій. Розмір: 180×40×2,5 мм. Матеріал: сталь.",
  },
  /*     {
    id: 7,
    name: "Large curtain 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc:
      "/images/products/7.hinge-large-190/item1.jpg",
    imageAlt:
      "Metal furniture hinge for complex structures.",
    category: "curtains",
    thickness: "2,5 мм",
    size: "180×40×2,5 мм",
    type: "Слайдер Н-10",
    description:
      "Metal furniture hinge for complex structures. Size: 180×40×2.5 mm. Material: steel.",
  }, */
  {
    id: 8,
    name: "Завіса мала",
    href: "#",
    price: "8.50 грн./шт.",
    imageSrc: "/images/products/8.hinge-small/item1.jpg",
    imageAlt: "Компактна меблева петля для точного відкривання.",
    category: "curtains",
    thickness: "1,8 мм",
    size: "180×40×2,5 мм",
    type: "",
    description:
      "Компактна меблева петля для точного відкривання. Розмір: 90×40×1,8 мм. Матеріал: сталь.",
  },
  /*     {
    id: 8,
    name: "Large curtain 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc:
      "/images/products/8.hinge-small/item1.jpg",
    imageAlt:
      "Compact furniture hinge for precise opening.",
    category: "curtains",
    thickness: "1,8 мм",
    size: "180×40×2,5 мм",
    type: "",
    description:
      "Compact furniture hinge for precise opening. Size: 90×40×1.8 mm. Material: steel.",
  }, */
  {
    id: 9,
    name: "Куток 106 оцинкований",
    href: "#",
    price: "2.50 грн./шт.",
    imageSrc: "/images/products/9.angle-106/item1.jpg",
    imageAlt: "Меблевий з’єднувальний куток 106. ",
    category: "corners",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "",
    description:
      "Меблевий з’єднувальний куток 106. Матеріал: оцинкована сталь. Розмір: 33×34×1,5 мм",
  },
  /*     {
    id: 9,
    name: "Corner 106 galvanized",
    href: "#",
    price: "2.50 грн./шт.",
    imageSrc:
      "/images/products/9.angle-106/item1.jpg",
    imageAlt:
      "Меблевий з’єднувальний куток 106.",
    category: "corners",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "",
    description:
      "Меблевий з’єднувальний куток 106. Матеріал: оцинкована сталь. Розмір: 33×34×1,5 мм",
  }, */
  {
    id: 10,
    name: "Механізм Блюз",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/10.mechanism-blues/item1.jpg",
    imageAlt: "Механізм пружинний для м’яких меблів.",
    category: "mechanisms",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "Пружинний",
    description:
      "Пружинний механізм для м’яких меблів. Використовується у розкладних диванах.",
  },
  /*       {
    id: 10,
    name: "Mechanism Blues",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/10.mechanism-blues/item1.jpg",
    imageAlt: "Spring mechanism for upholstered furniture.",
    category: "mechanisms",
    thickness: "1,5 мм",
    size: "33×34×1,5 мм",
    type: "Springy",
    description:
      "Spring mechanism for upholstered furniture. Used in folding sofas.",
  }, */
  {
    id: 11,
    name: "Механізм ліжковий гідравлічний",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/12.mechanism-bed/item1.jpg",
    imageAlt: "Підйомний гідравлічний механізм для ліжок. ",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Підйомний гідравлічний механізм для ліжок. Зручний у щоденному використанні.",
  },
  /*     {
    id: 11,
    name: "Hydraulic bed mechanism",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/12.mechanism-bed/item1.jpg",
    imageAlt: "Hydraulic lifting mechanism for beds.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Hydraulic lifting mechanism for beds. Convenient for daily use.",
  }, */
  {
    id: 12,
    name: "Механізм Алігатор",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/11.mechanism-alligator/item1.jpg",
    imageAlt: "Механізм трансформації меблів білого кольору.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Механізм трансформації меблів білого кольору. Підходить для компактних конструкцій. Колір: білий.",
  },
  /*   {
    id: 12,
    name: " Mechanism Alligator",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/11.mechanism-alligator/item1.jpg",
    imageAlt: "White furniture transformation mechanism.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "White furniture transformation mechanism. Suitable for compact designs. Color: white.",
  }, */
  {
    id: 13,
    name: "Механізм Євро-Книжка",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/13.mechanism-eurobook/item1.jpg",
    imageAlt: "Механізм для трансформації диванів у положення 'ліжко'.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Механізм для трансформації диванів у положення 'ліжко'. Колір: білий.",
  },
  /*     {
    id: 13,
    name: "Mechanism Euro-Book",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/13.mechanism-eurobook/item1.jpg",
    imageAlt: "Mechanism for transforming sofas into a 'bed' position.",
    category: "mechanisms",
    thickness: "",
    size: "",
    type: "",
    description:
      "Mechanism for transforming sofas into a 'bed' position. Color: white.",
  }, */
];

export default products;
