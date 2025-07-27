import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import clsx from "clsx";


const dmSans = DM_Sans({
  display: "swap",
  weight: "variable",
  subsets: ['latin'],
  variable: '--font-dmSans'
})

export const metadata: Metadata = {
  title: "MessageMe",
  description: "MessageMe is a secure online platform for sending and recieving electronic messages, it is a free to use, web-based email service accessible through web browsers",
  keywords: ["Inbox, Inbox app, mail, messaging, email"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:m-2 [&::-webkit-scrollbar-thumb]:bg-neutral-900">
      <body
      className={clsx(dmSans.className, `antialiased`)}
      >
        {children}
      </body>
    </html>
  );
}
