import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shakti | AI Fitness APP",
  description: "Our mission is to promote an active lifestyle and guide individuals towards a balanced approach to fitness and health, ensuring a healthier, stronger tomorrow.",
  icons: "https://img.icons8.com/?size=100&id=57197&format=png&color=000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
