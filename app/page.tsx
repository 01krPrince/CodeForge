import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import CourseSection from "@/components/marketing/CourseSection";
import Testimonials from "@/components/marketing/Testimonials";
import Mentors from "@/components/marketing/Mentors";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <main>
      {/* The Navbar lives here so it only shows on the landing page */}
      <Navbar />
      
      {/* Page Sections */}
      <Hero />
      <CourseSection />
      <Mentors />
      <Testimonials />
      <Footer />
    </main>
  );
}