import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ locale: string }> };

export default async function OGImage({ params }: Props) {
  const { locale } = await params;
  const taglines = {
    ua: "Меблева фурнітура: механізми, петлі, зачепи, кутки",
    ru: "Мебельная фурнитура: механизмы, петли, крючки, уголки",
    en: "Furniture hardware: mechanisms, hinges, latches, corners",
  };
  const tagline = taglines[locale as keyof typeof taglines] ?? taglines.ua;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1d4ed8 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Фурніт-Про
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.85 }}>{tagline}</div>
      </div>
    ),
    { ...size }
  );
}
