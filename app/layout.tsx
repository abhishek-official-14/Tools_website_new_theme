import type { Metadata } from "next";
import "./global.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "EaseMyTools - Free Online Tools",
  description: "Edit PDFs, compress images, convert files, generate QR codes, and more with EaseMyTools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="light-mode">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
