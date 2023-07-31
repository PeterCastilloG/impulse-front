"use client";

import "./global.css";
import background from "../assets/challengeBackground.png";
import Sidebar from "../shared/components/sidebar/Sidebar";
import Image from "next/image";
import { Session } from "next-auth";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import React from "react";
import Navbar from "@/shared/components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const path = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Impulse</title>
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <SessionProvider session={session}>
            <Image src={background} alt="background" className="background" />
            <div className="wrapper">
              {!path.includes("/r/") && <Sidebar />}
              <div
                className={`container ${
                  path.includes("/r/") && "auth"
                }`}
              >
                {!path.includes("/r/") && <Navbar/>}
                <div className="page"><div className="content">{children}</div></div>
              </div>
            </div>
            <div id="modal"></div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
