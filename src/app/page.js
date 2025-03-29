// import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectsSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import AchievementsSections from "./component/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSections />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        </div>
        <Footer />
      </main>
  );
}
