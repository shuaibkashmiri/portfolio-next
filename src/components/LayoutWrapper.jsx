"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";
import FloatingButtons from "./FloatingButtons";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>
      {!isAdminPage && (
        <>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <FloatingButtons />
        </>
      )}
    </>
  );
}
