"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqItems: FAQItem[] = [
    { question: "Como posso cadastrar minha quadra?", answer: "Clique no botão 'Cadastre sua quadra', preencha os dados e envie o formulário." },
    { question: "Como reservar uma quadra como atleta?", answer: "Crie uma conta de atleta, escolha a quadra, horário e efetue o pagamento pelo app." },
    { question: "Quais formas de pagamento estão disponíveis?", answer: "Aceitamos Pix e cartões. O repasse é automático para a conta do dono da quadra." },
    { question: "Posso cancelar minha reserva?", answer: "Sim, conforme a política de cada quadra. Multas podem ser aplicadas dependendo do horário." },
];

export default function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    return (
        <>
            {/* Botão flutuante */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center text-white"
                >
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 w-80 max-w-xs bg-[#0f1720] rounded-xl shadow-xl border border-gray-700 overflow-hidden flex flex-col"
                        >
                            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                                <h3 className="text-gray-100 font-semibold">Chatbot FAQ</h3>
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
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
                                    faqItems.map((faq, idx) => (
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
        </>
    );
}
