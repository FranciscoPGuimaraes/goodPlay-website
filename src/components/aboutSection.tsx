"use client";

import { motion } from "framer-motion";

const aboutItems = [
    {
        title: "Nossa missão",
        desc: "Conectar donos de quadras e atletas, proporcionando reservas rápidas, seguras e uma experiência divertida para todos."
    },
    {
        title: "Nossa visão",
        desc: "Ser a principal plataforma de reservas e engajamento esportivo no Brasil, incentivando a prática esportiva e o crescimento das quadras locais."
    },
    {
        title: "Nossos valores",
        desc: "Transparência, inovação, segurança e foco na comunidade esportiva."
    }
];

export default function AboutSection() {
    return (
        <section className="min-h-screen bg-[#0b0b0d] text-gray-100 py-20 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-3 text-green-400">Sobre a GoodPlay</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Conheça nossa empresa, nossos objetivos e os valores que nos movem para criar a melhor experiência para donos de quadras e atletas.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                {aboutItems.map((item) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#0f1720] p-6 rounded-2xl border border-gray-800 hover:border-green-600 transition-all"
                    >
                        <h3 className="font-semibold text-lg text-green-400 mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
