import "./globals.css";
import { cx } from "@/panda/css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Mulish } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "EverGreen - Crafting Green Masterpieces",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit suscipit egestas consectetur adipiscing elit.p",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(bricolageGrotesque.variable, mulish.variable)}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
