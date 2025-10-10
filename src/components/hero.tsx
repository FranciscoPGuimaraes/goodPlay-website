"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Linkedin, Youtube } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
            {/* Fundo */}
            <Image
                src="/assets/bg-hero.jpg"
                alt="GoodPlay background"
                fill
                className="object-cover object-center filter brightness-50"
            />

            {/* Conteúdo */}
            <div className="relative z-20 max-w-4xl px-6 flex flex-col items-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Animação da logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-48 sm:w-64 md:w-80 lg:w-96 mx-auto mb-4"
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="GoodPlay logo"
                            width={800}
                            height={800}
                            className="w-full h-auto drop-shadow-lg"
                            priority
                        />
                    </motion.div>

                    <p className="mt-2 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Plataforma para reservar quadras com segurança, melhorar a renda de donos de
                        quadras e engajar atletas com gamificação, campeonatos e parcerias.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
                        <motion.a
                            href="#owners"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-3 font-semibold shadow-lg hover:bg-green-500 transition"
                        >
                            Cadastre sua quadra
                        </motion.a>
                        <motion.a
                            href="#players"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-gray-700 px-6 py-3 hover:bg-white/5 transition bg-white/20 backdrop-blur-md"
                        >
                            Sou atleta — ver vantagens
                        </motion.a>
                    </div>

                </motion.div>

                {/* Ícones de redes sociais */}
                <motion.div
                    className="mt-12 flex items-center gap-6 text-white z-30"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {/* Tooltip Wrapper */}
                    <div className="group relative">
                        <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
                            <Instagram size={26} />
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            Instagram
                        </span>
                    </div>

                    <div className="group relative">
                        <Link href="https://wa.me/5599999999999" target="_blank" className="hover:text-green-500 transition">
                            <FaWhatsapp size={26} />
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            WhatsApp
                        </span>
                    </div>

                    <div className="group relative">
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">
                            <Linkedin size={26} />
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            LinkedIn
                        </span>
                    </div>

                    <div className="group relative">
                        <Link href="https://tiktok.com" target="_blank" className="hover:text-gray-300 transition">
                            <FaTiktok size={26} />
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            TikTok
                        </span>
                    </div>

                    <div className="group relative">
                        <Link href="https://youtube.com" target="_blank" className="hover:text-red-500 transition">
                            <Youtube size={26} />
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                            YouTube
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="w-36 h-2 rounded-full bg-gradient-to-r from-green-500 to-transparent opacity-80" />
                </motion.div>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none" />
        </section>
    )
}

export default Hero
