// ------------------------------
// File: app/page.tsx
// ------------------------------
import React from 'react'
import Hero from '../components/hero'
import OwnersSection from '../components/ownerSection'
import PlayersSection from '../components/playerSection'
import PartnersSection from '../components/partnerSection'
import StatsSection from '../components/statsSection'
import TestimonialsSection from '../components/testimonialsSection'
import Footer from '../components/footer'


export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-gray-100 antialiased">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 pb-24">
        <div className="bg-gradient-to-b from-transparent to-[#0b0b0d]/90 rounded-xl shadow-2xl p-6 backdrop-blur-md">
          <OwnersSection />
          <PlayersSection />
          <PartnersSection />
          <StatsSection />
          <TestimonialsSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}