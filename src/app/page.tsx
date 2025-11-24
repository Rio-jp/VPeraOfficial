import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Footer />
    </main>
  );
}
