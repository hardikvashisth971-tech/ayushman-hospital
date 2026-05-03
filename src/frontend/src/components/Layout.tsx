import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* top padding for fixed header (16px top-bar + 64px main nav = ~80px) */}
      <main className="flex-1 pt-[80px]" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
