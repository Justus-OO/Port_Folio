import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

// Configure Roboto
const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Justus Obisa | Full-Stack Software Engineer",
  description: "Portfolio of a Computer Science Graduate specializing in scalable applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} font-sans antialiased bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}