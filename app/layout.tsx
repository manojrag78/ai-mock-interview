import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import "./globals.css";

const moonoSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "My Interview",
  description: "Give Your Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${moonoSans.variable} antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
