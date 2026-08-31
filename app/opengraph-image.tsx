import { ImageResponse } from "next/og";

export const alt = "M.T Interior & Home Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#0f1b2d",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontStyle: "italic",
            color: "#d9b877",
            marginBottom: 24,
          }}
        >
          M.T Interior &amp; Home Services
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            color: "#f5f2ea",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          We design spaces, you live better.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(245,242,234,0.6)",
            marginTop: 32,
          }}
        >
          Aluminum · Glass · Gypsum · Interior fit-out — Lahore
        </div>
      </div>
    ),
    { ...size }
  );
}
