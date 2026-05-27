import { ImageResponse } from "next/og"

export const alt = process.env.TITLE || "Minagishl"
export const size = { width: 1200, height: 1200 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "#09090b",
        }}
      />
    </div>,
    { ...size }
  )
}
