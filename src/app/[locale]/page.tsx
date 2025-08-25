import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/* export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
 */

const products = [
  {
    id: 1,
    name: "Механізм юніор посилений",
    href: "/mechanism-junior-strong",
    price: "40.00 грн./шт.",
    imageSrc: "/images/products/1.mechanism-junior-strong/item1.jpg",
    imageAlt: "Механізм меблевий підйомний без ребра жорсткості.",
  },
  /*   {
    id: 1,
    name: "Junior mechanism reinforced",
    href: "/mechanism-junior-strong",
    price: "$48",
    imageSrc: "/images/products/1.mechanism-junior-strong/item1.jpg",
    imageAlt: "Furniture lifting mechanism without stiffener.",
  }, */
  {
    id: 2,
    name: "Зачіп середній",
    href: "#",
    price: "4.50 грн./шт.",
    imageSrc: "/images/products/2.latch-medium/item1.jpg",
    imageAlt: "Механізм меблевий підйомний без ребра жорсткості.",
  },
  /*     {
    id: 2,
    name: "Medium hook",
    href: "#",
    price: "4.50 грн./шт.",
    imageSrc: "/images/products/2.latch-medium/item1.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  }, */
  {
    id: 3,
    name: "Зачіп великий",
    href: "#",
    price: "4.90 грн./шт.",
    imageSrc: "/images/products/3.latch-large/item1.jpg",
    imageAlt: "Зачіп посилений  для великих меблевих елементів.",
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
  }, */
  {
    id: 4,
    name: "Зачіп слайдер Н-16",
    href: "#",
    price: "9.20 грн./шт.",
    imageSrc: "/images/products/4.latch-slider-h16/item1.jpg",
    imageAlt: "Зачіп типу слайдер для меблевих направляючих.",
  },
  /*     {
    id: 4,
    name: "Hook slider Н-16",
    href: "#",
    price: "9.20 грн./шт.",
    imageSrc:
      "/images/products/4.latch-slider-h16/item1.jpg",
    imageAlt:
      "Slider type hook for furniture guides.",
  }, */
  {
    id: 5,
    name: "Зачіп слайдер Н-10",
    href: "#",
    price: "8.80 грн./шт.",
    imageSrc: "/images/products/5.latch-slider-h10/item1.jpg",
    imageAlt: "Компактний зачіп для направляючих.",
  },
  /*     {
    id: 5,
    name: "Hook slider Н-10",
    href: "#",
    price: "8.80 грн./шт.",
    imageSrc:
      "/images/products/5.latch-slider-h10/item1.jpg",
    imageAlt:
      "Compact hook for guides.",
  }, */
  {
    id: 6,
    name: "Mеханізм Юніор",
    href: "#",
    price: "38.00 грн./шт.",
    imageSrc: "/images/products/6.mechanism-junior/item1.jpg",
    imageAlt: "Механізм меблевий підйомний без ребра жорсткості.",
  },
  /*     {
    id: 6,
    name: "Mechanism Junior",
    href: "#",
    price: "38.00 грн./шт.",
    imageSrc:
      "/images/products/6.mechanism-junior/item1.jpg",
    imageAlt:
      "Furniture lifting mechanism without stiffener.",
  }, */
  {
    id: 7,
    name: "Завіса велика 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc: "/images/products/7.hinge-large-190/item1.jpg",
    imageAlt: "Завіса меблева металева велика для складних конструкцій.",
  },
  /*     {
    id: 7,
    name: "Large curtain 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc:
      "/images/products/7.hinge-large-190/item1.jpg",
    imageAlt:
      "Large metal furniture hinge for complex structures.",
  }, */
  {
    id: 8,
    name: "Завіса мала",
    href: "#",
    price: "8.50 грн./шт.",
    imageSrc: "/images/products/8.hinge-small/item1.jpg",
    imageAlt: "Завіса меблева металева мала для складних конструкцій.",
  },
  /*     {
    id: 8,
    name: "Large curtain 190",
    href: "#",
    price: "24.00 грн./шт.",
    imageSrc:
      "/images/products/8.hinge-small/item1.jpg",
    imageAlt:
      "Small metal furniture hinge for complex structures.",
  }, */
  {
    id: 9,
    name: "Куток 106 оцинкований",
    href: "#",
    price: "2.50 грн./шт.",
    imageSrc: "/images/products/9.angle-106/item1.jpg",
    imageAlt: "Куток меблевий з’єднувальний  106.",
  },
  /*     {
    id: 9,
    name: "Corner 106 galvanized",
    href: "#",
    price: "2.50 грн./шт.",
    imageSrc:
      "/images/products/9.angle-106/item1.jpg",
    imageAlt:
      "Furniture corner connecting 106.",
  }, */
  {
    id: 10,
    name: "Механізм Блюз",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/10.mechanism-blues/item1.jpg",
    imageAlt: "Механізм пружинний для м’яких меблів.",
  },
  /*       {
    id: 10,
    name: "Mechanism Blues",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/10.mechanism-blues/item1.jpg",
    imageAlt: "Spring mechanism for upholstered furniture.",
  }, */
  {
    id: 11,
    name: "Механізм ліжковий гідравлічний",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/11.mechanism-bed/item1.jpg",
    imageAlt: "Механізм підйомний гідравлічний для ліжок.",
  },
  /*     {
    id: 11,
    name: "Hydraulic bed mechanism",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/11.mechanism-bed/item1.jpg",
    imageAlt: "Hydraulic lifting mechanism for beds.",
  }, */
  {
    id: 12,
    name: "Механізм Алігатор",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/12.mechanism-alligator/item1.jpg",
    imageAlt: "Механізм трансформації меблів білого кольору.",
  },
  /*   {
    id: 12,
    name: " Mechanism Alligator",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/12.mechanism-alligator/item1.jpg",
    imageAlt: "White furniture transformation mechanism.",
  }, */
  {
    id: 13,
    name: "Механізм Євро-Книжка",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/13.mechanism-eurobook/item1.jpg",
    imageAlt: "Механізм для трансформації диванів у положення 'ліжко'.",
  },
  /*     {
    id: 13,
    name: "Mechanism Euro-Book",
    href: "#",
    price: "??? грн./шт.",
    imageSrc: "/images/products/13.mechanism-eurobook/item1.jpg",
    imageAlt: "
Mechanism for transforming sofas into a 'bed' position.",
  }, */
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
