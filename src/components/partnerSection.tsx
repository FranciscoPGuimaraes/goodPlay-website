"use client";

// ------------------------------
// File: components/PartnersSection.tsx
// ------------------------------
import React from 'react'
import { motion } from 'framer-motion'


const partners = ['/assets/partners/partner1.svg', '/assets/partners/partner2.svg', '/assets/partners/partner3.svg', '/assets/partners/partner4.svg']


const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="mt-12 py-12">
            <motion.h4 className="text-xl font-bold text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                Nossos parceiros
            </motion.h4>


            <motion.div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                {partners.map((p, i) => (
                    <div key={i} className="p-4 bg-[#0b1114]/60 rounded-lg border border-gray-800 w-full h-20 flex items-center justify-center">
                        <img src={p} alt={`partner-${i}`} className="max-h-12 object-contain" />
                    </div>
                ))}
            </motion.div>
        </section>
    )
}


export default PartnersSection