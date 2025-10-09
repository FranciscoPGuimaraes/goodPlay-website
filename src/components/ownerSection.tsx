"use client";
import React from 'react'
import { motion } from 'framer-motion'


const benefits = [
    {
        title: 'Aumente sua renda',
        desc: 'Receba reservas fáceis e previsíveis — controle preços e horários.'
    },
    {
        title: 'Segurança e confiança',
        desc: 'Verificação de usuários, garantia de pagamento e suporte.'
    },
    {
        title: 'Parcerias locais',
        desc: 'Conecte-se com marcas e torneios para gerar receita extra.'
    }
]


const OwnersSection: React.FC = () => {
    return (
        <section id="owners" className="mt-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold">Para donos de quadra</h2>
                    <p className="mt-3 text-gray-300 max-w-xl">
                        Gerencie horários, aumente suas reservas e tenha segurança jurídica e financeira
                        ao alugar suas quadras. Tudo pensado para simplificar sua operação.
                    </p>


                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((b) => (
                            <div key={b.title} className="rounded-lg p-4 bg-[#0f1720]/60 border border-gray-800">
                                <h4 className="font-semibold">{b.title}</h4>
                                <p className="mt-1 text-sm text-gray-300">{b.desc}</p>
                            </div>
                        ))}
                    </div>


                    <div className="mt-6 flex gap-3">
                        <a href="#" className="px-5 py-3 rounded-md bg-green-600 font-semibold">Quero cadastrar</a>
                        <a href="#" className="px-5 py-3 rounded-md border border-gray-700">Saiba mais</a>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <img src="/assets/mock-owner.jpg" alt="owner mock" className="w-full h-72 object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export default OwnersSection