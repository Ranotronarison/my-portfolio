import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tHero = await getTranslations({ locale, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#211b2b",
          backgroundImage: "linear-gradient(135deg, #2b2338 0%, #1a1522 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#fb7c6e", fontWeight: 600, letterSpacing: 2 }}>
          {'{ '}NOMENA R.{' }'}
        </div>
        <div style={{ display: "flex", fontSize: 72, color: "#f5f5f5", fontWeight: 700, marginTop: 20 }}>
          {t("title").split("|")[1]?.trim() || t("title")}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#c9c3d1", marginTop: 24 }}>
          {tHero("backendDev")} {tHero("and")} {tHero("devops")}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 56 }}>
          {["Symfony", "PHP", "Kubernetes", "Docker", "CI/CD"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                border: "2px solid #fb7c6e",
                color: "#fb7c6e",
                fontSize: 24,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
