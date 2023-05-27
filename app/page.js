import HeroUnderconstruction from "@/components/HeroUnderconstruction";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <Navbar />

        {/* Main content */}
        {/* <MainContent /> */}
        <HeroUnderconstruction />
      </div>
    </>
  );
}
