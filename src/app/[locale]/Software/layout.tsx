import type React from "react";
import Footer from "../home/components/Footer";
import Header from "../home/components/Header";

export default async function TrainingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-grow bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
