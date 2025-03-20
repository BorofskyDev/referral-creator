import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Joel's Referral App",
  description: "Have a customer who needs to contact me? Here you go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${openSans.variable}  bg-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
