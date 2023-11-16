import Features from "@/components/templates/Features";
import Header from "@/components/modules/Header";
import Sidebar from "@/components/modules/Sidebar";
import Stories from "@/components/templates/Stories";
import Houses from "@/components/templates/Houses";
import Gallery from "@/components/templates/Gallery";
import Footer from "@/components/modules/Footer";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[15] w-full">
        <Header />
        <Features />
        <Stories />
        <Houses />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}
