"use client";
// ------------------------------
// File: components/PlayersSection.tsx
// ------------------------------
import React from 'react'
import { motion } from 'framer-motion'


const perks = [
    'Gamificação e placares',
    'Torneios e rankings locais',
    'Comparação de preços e promoções',
    'Integração com parceiros e descontos'
]

const PlayersSection: React.FC = () => {
    return (
        <section id="players" className="mt-12 py-12 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-[#071017]/50 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold">Para atletas</h3>
                        <p className="mt-2 text-gray-300 max-w-md">
                            Reserve quadras facilmente, participe de campeonatos, suba no ranking e aproveite promoções
                            de parceiros próximos a você.
                        </p>


                        <ul className="mt-4 space-y-3">
                            {perks.map((p) => (
                                <li key={p} className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-md bg-green-600 flex items-center justify-center font-bold">✓</div>
                                    <div>
                                        <div className="font-semibold">{p}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>


                        <div className="mt-6">
                            <a href="#" className="px-5 py-3 rounded-md bg-green-600 font-semibold">Quero jogar</a>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <img src="/assets/mock-player.jpg" alt="player mock" className="w-full h-72 object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default PlayersSection