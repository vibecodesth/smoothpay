import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmoothPay - Steady Income for Freelancers",
  description: "Turn your unpredictable freelance income into a steady paycheck—automatically. No more anxiety about slow months.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
