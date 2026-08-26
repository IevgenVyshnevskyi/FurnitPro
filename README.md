Як реалізувати Google Таблиці як Базу Даних у Next.js 15

Ця архітектура дозволить вам тримати всі дані в Google Sheets. Після передачі проєкту клієнту, йому достатньо буде змінити клітинку в таблиці, і сайт оновиться. Ніяких баз даних чи складних адмін-панелей.

Крок 1. Підготовка Гугл Таблиці

Створіть таблицю в Google Drive (наприклад, FurnitPro_Products).

Назвіть перший аркуш (sheet) Products.

Створіть колонки точно за вашим інтерфейсом:

A: id (наприклад, 2)

B: category (mechanisms)

C: name_ua (Механізм Юніор)

D: name_en (Junior Mechanism)

E: href (/mechanism-junior)

F: price_ua (38.00 грн./шт.)

G: price_en (38.00 UAH/pc.)

H: image (/images/products/...)

I: imageAlt_ua (Механізм Юніор.)

J: imageAlt_en (Junior mechanism.)

...і так далі для thickness, size, type та description.

ОБОВ'ЯЗКОВО: Натисніть кнопку "Поділитися" (Share) і зробіть таблицю відкритою для всіх, у кого є посилання ("Anyone with the link can view").

Крок 2. Отримання ключів

Зайдіть у Google Cloud Console.

Створіть проєкт, знайдіть Google Sheets API та натисніть "Enable".

Перейдіть у "Credentials" -> "Create Credentials" -> "API Key".

Скопіюйте цей ключ.

У файлі .env.local вашого проєкту додайте:

GOOGLE*API_KEY=ваш*ключ
GOOGLE*SPREADSHEET_ID=айді*вашої*таблиці*з*url*адреси

Крок 3. Створення сервісу зчитування

Створіть файл src/services/googleSheets.ts:

import { Product } from "@/types"; // шлях до вашого інтерфейсу Product

const API_KEY = process.env.GOOGLE_API_KEY;
const SHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
// Беремо дані з аркуша Products, стовпці від A до Z
const RANGE = "Products!A2:Z100";

export async function getProducts(locale: string): Promise<Product[]> {
if (!API_KEY || !SHEET_ID) return [];

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

try {
// Кешуємо запит на 1 годину (3600 секунд)
const res = await fetch(url, { next: { revalidate: 3600 } });
const data = await res.json();
const rows = data.values;

    if (!rows) return [];

    const isUa = locale === "ua";

    return rows.map((row) => ({
      id: Number(row[0]),
      category: row[1] || "",
      name: isUa ? row[2] : row[3] || row[2],
      href: row[4] || "#",
      price: isUa ? row[5] : row[6] || row[5],
      imageSrc: {
        image: row[7] || "/placeholder.jpg",
        drawing: row[8] || undefined, // якщо є креслення
      },
      imageAlt: isUa ? row[9] : row[10] || "",
      thickness: row[11] || "",
      size: row[12] || "",
      type: isUa ? row[13] : row[14] || "",
      description: isUa ? row[15] : row[16] || "",
    }));

} catch (error) {
console.error("Помилка завантаження товарів:", error);
return [];
}
}

Крок 4. Оновлення сторінки категорій

Тепер у вашому файлі src/app/[locale]/[category]/page.tsx вам потрібно замінити локальний масив на виклик цієї функції:

import { getProducts } from "@/services/googleSheets";
import CategoryPageClient from "./CategoryPageClient";

type Props = {
params: Promise<{ locale: string; category: string }>;
};

export default async function CategoryPage({ params }: Props) {
const { category, locale = "ua" } = await params;

// Отримуємо товари з Гугл Таблиці!
const allProducts = await getProducts(locale);

// Фільтруємо за категорією
const categoryProducts = allProducts.filter((p) => p.category === category);

return (
<CategoryPageClient
products={categoryProducts} // Передаємо у клієнтський компонент
category={category}
locale={locale}
/>
);
}

Крок 5. Оновлення файлів перекладу (i18n)

Оскільки тепер всі назви (і українські, і англійські) та ціни приходять безпосередньо з Google Таблиці, вам більше не потрібно дублювати їх у файлах ua.json та en.json у розділах CategoryPage.products чи prices.

Ви просто виводите ці значення у вашому CategoryPageClient.tsx безпосередньо з об'єкта product:

// Замість: {t(`products.${product.id}`)}
// Пишіть просто:

<h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
<p className="mt-auto text-lg font-medium">{product.price}</p>

Ось і все! Ваша база даних тепер — це зручна таблиця, доступна клієнту з будь-якого пристрою.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
