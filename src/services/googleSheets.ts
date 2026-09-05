import { Product } from "@/types";

const API_KEY = process.env.GOOGLE_API_KEY;
const SHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
// Read data from the Products sheet, columns A to Z
const RANGE = "Products!A2:Z100";

export async function getProducts(locale: string): Promise<Product[]> {
  if (!API_KEY || !SHEET_ID) return [];

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    // Cache the request for 1 hour (3600 seconds)
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(`Google Sheets API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    const rows = data.values as string[][] | undefined;

    if (!rows) return [];

    const isUa = locale === "ua";

    return rows
      .map((row) => ({
        id: Number(row[0]),
        category: row[1] || "",
        name: (isUa ? row[2] || row[3] : row[3] || row[2]) || "",
        href: row[4] || "#",
        price: (isUa ? row[5] || row[6] : row[6] || row[5]) || "",
        imageSrc: {
          image: row[7] || "/placeholder.jpg",
          drawing: row[8] || undefined, // if a drawing is provided
        },
        imageAlt: (isUa ? row[9] || row[10] : row[10] || row[9]) || "",
        thickness: row[11] || "",
        size: row[12] || "",
        type: (isUa ? row[13] || row[14] : row[14] || row[13]) || "",
        description: (isUa ? row[15] || row[16] : row[16] || row[15]) || "",
      }))
      .filter((product) => !Number.isNaN(product.id));
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}
