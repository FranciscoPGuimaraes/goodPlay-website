"use client";
// ------------------------------
// File: components/TestimonialsSection.tsx
// ------------------------------
import React from 'react'
import { motion } from 'framer-motion'


const testimonials = [
    {
        name: 'João Silva',
        role: 'Dono de quadra',
        text: 'Desde que entrei no GoodPlay minhas reservas aumentaram 35% — a plataforma é fácil e segura.'
    },
    {
        name: 'Mariana Costa',
        role: 'Atleta',
        text: 'Participei de 2 campeonatos pelo app e já subi no ranking local. Muito divertido!'
    },
    {
        name: 'Lucas Pereira',
        role: 'Organizador',
        text: 'As parcerias e promoções facilitaram a divulgação dos nossos eventos.'
    }
]


const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="mt-12 py-12 border-t border-gray-800">
            <h3 className="text-2xl font-bold text-center">O que estão dizendo</h3>


            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <motion.blockquote key={i} className="p-6 bg-[#071017]/50 rounded-lg border border-gray-800" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
                        <p className="text-gray-300">{t.text}</p>
                        <footer className="mt-4 text-sm text-gray-400">— {t.name}, <span className="text-xs">{t.role}</span></footer>
                    </motion.blockquote>
                ))}
            </div>
        </section>
    )
}


export default TestimonialsSection