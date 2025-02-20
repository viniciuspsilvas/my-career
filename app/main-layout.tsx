"use client";

import { NavBar } from "../src/components/nav-bar";
// import Footer from "../src/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
