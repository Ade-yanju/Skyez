import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata = {
  title: "SKYEZ — Sound. Culture. Identity.",
  description:
    "Official website of SKYEZ. Music, visuals, bookings, and releases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#fff",
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
