import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import HeritageNarrative from '@/components/HeritageNarrative';
import InvestmentPhilosophy from '@/components/InvestmentPhilosophy';
import SectorGrid from '@/components/SectorGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <HeritageNarrative />
      <InvestmentPhilosophy />
      <SectorGrid />
      <Footer />
    </main>
  );
}