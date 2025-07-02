import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/app/globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ['latin'],
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: "Inbox App",
  description: "Inbox is a secure online platform for sending and recieving electronic messages, it is a free to use, web-based email service accessible through web browsers",
  keywords: ["Inbox, Inbox app, mail, messaging, email"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:m-2 [&::-webkit-scrollbar-thumb]:bg-black">
      <body
        className={`antialiased ${archivo.variable } font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
