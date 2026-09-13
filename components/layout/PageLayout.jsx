import Navbar from "@/components/layout/Navbar";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6f9f2]">{children}</main>
    </>
  );
}
