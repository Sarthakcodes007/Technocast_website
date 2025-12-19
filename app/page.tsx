import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechnicalApproach from '@/components/TechnicalApproach';
import Benefits from '@/components/Benefits';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TechnicalApproach />
      <Benefits />
      <EnquiryForm />
      <Footer />
    </main>
  );
}

