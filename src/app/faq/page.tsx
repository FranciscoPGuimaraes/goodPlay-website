"use client";

import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqOwners: FAQItem[] = [
    { question: "Como posso cadastrar minha quadra?", answer: "Clique no botão 'Cadastre sua quadra', preencha os dados e envie o formulário." },
    { question: "Quais formas de pagamento posso receber?", answer: "Aceitamos Pix e cartões. O repasse é automático para a sua conta." },
    { question: "Como funcionam cancelamentos e multas?", answer: "Você pode definir regras de cancelamento para cada reserva, incluindo multas e penalidades." },
];

const faqPlayers: FAQItem[] = [
    { question: "Como reservar uma quadra?", answer: "Crie uma conta de atleta, escolha a quadra, horário e efetue o pagamento." },
    { question: "Quais formas de pagamento posso usar?", answer: "Aceitamos Pix e cartões." },
    { question: "Posso cancelar minha reserva?", answer: "Sim, respeitando a política de cada quadra." },
];

export default function FAQPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const motionConfig = { duration: 0.5, ease: easeInOut }; // mais suave

    return (
        <main className="min-h-screen bg-[#0b0b0d] text-gray-100 px-6 md:px-20 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={motionConfig}
                className="text-4xl font-bold text-green-400 mb-6 text-center"
            >
                Perguntas Frequentes (FAQ)
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionConfig, delay: 0.1 }}
                className="text-gray-400 text-center mb-12 max-w-3xl mx-auto"
            >
                Aqui você encontra respostas para as dúvidas mais comuns. Clique nas perguntas para ver a resposta.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* FAQ Donos */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-400 mb-4">Para Donos de Quadra</h2>
                    <div className="space-y-2">
                        {faqOwners.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-[#0f1720] rounded-xl border border-gray-700 overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...motionConfig, delay: idx * 0.1 }}
                            >
                                <button
                                    className="w-full p-4 text-left flex justify-between items-center text-gray-200 hover:bg-gray-800 transition"
                                    onClick={() => setSelectedAnswer(selectedAnswer === faq.answer ? null : faq.answer)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="text-green-400">{selectedAnswer === faq.answer ? "-" : "+"}</span>
                                </button>
                                <AnimatePresence>
                                    {selectedAnswer === faq.answer && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ ...motionConfig }}
                                            className="p-4 text-gray-300 border-t border-gray-700"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ Atletas */}
                <div>
                    <h2 className="text-2xl font-semibold text-green-400 mb-4">Para Atletas</h2>
                    <div className="space-y-2">
                        {faqPlayers.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-[#0f1720] rounded-xl border border-gray-700 overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...motionConfig, delay: idx * 0.1 }}
                            >
                                <button
                                    className="w-full p-4 text-left flex justify-between items-center text-gray-200 hover:bg-gray-800 transition"
                                    onClick={() => setSelectedAnswer(selectedAnswer === faq.answer ? null : faq.answer)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="text-green-400">{selectedAnswer === faq.answer ? "-" : "+"}</span>
                                </button>
                                <AnimatePresence>
                                    {selectedAnswer === faq.answer && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ ...motionConfig }}
                                            className="p-4 text-gray-300 border-t border-gray-700"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chatbot flutuante */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center text-white"
                >
                    {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </button>

                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ ...motionConfig }}
                            className="mt-4 w-80 max-w-xs bg-[#0f1720] rounded-xl shadow-xl border border-gray-700 overflow-hidden flex flex-col"
                        >
                            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                                <h3 className="text-gray-100 font-semibold">Chatbot FAQ</h3>
                                <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4 flex flex-col gap-2 max-h-64 overflow-y-auto">
                                {selectedAnswer ? (
                                    <>
                                        <p className="text-gray-300">{selectedAnswer}</p>
                                        <button
                                            onClick={() => setSelectedAnswer(null)}
                                            className="mt-2 text-sm text-green-400 hover:underline"
                                        >
                                            Voltar às perguntas
                                        </button>
                                    </>
                                ) : (
                                    [...faqOwners, ...faqPlayers].map((faq, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedAnswer(faq.answer)}
                                            className="text-left text-gray-200 p-2 rounded-md hover:bg-gray-800 transition"
                                        >
                                            {faq.question}
                                        </button>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
