import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6f9f2]">{children}</main>
      <Footer />
    </>
  );
}
