"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    CreditCard,
    Rocket,
    Handshake,
    Lightbulb,
    HelpCircle,
    MessageCircle
} from "lucide-react";

const infos = [
    {
        icon: <Rocket className="w-6 h-6 text-green-400" />,
        title: "Como funciona?",
        desc: "Cadastre sua quadra, defina horários e preços. Os jogadores encontram, reservam e pagam tudo pelo app. Você recebe e realiza avaliações melhorando a comunidade. Uma porcentagem dos aluguéis é cobrada e o valor é transferido automaticamente para sua conta bancária.",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-green-400" />,
        title: "Meio de pagamento",
        desc: "Os jogadores podem pagar via Pix ou cartão, com repasse automático e segurança em todas as transações na sua conta. Além disso, oferecemos uma segurança com multas de cancelamento em cima do horário e cobrança de todos os jogadores. Também oferecemos um controle financeiro da sua quadra.",
    },
    {
        icon: <CheckCircle className="w-6 h-6 text-green-400" />,
        title: "Vantagens",
        desc: "Gerencie reservas facilmente, reduza cancelamentos e tenha visibilidade total sobre seus rendimentos. Participe de uma comunidade crescente de jogadores, torneios, parcerias e tudo que o futebol brasileiro pode oferecer.",
    },
    {
        icon: <Handshake className="w-6 h-6 text-green-400" />,
        title: "Parcerias",
        desc: "Acesse marcas esportivas e torneios locais para ampliar sua receita e visibilidade. Parceria com fornecedores de material esportivo, uniformes e serviços de manutenção. Além de realização de eventos e torneios em sua quadra.",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-green-400" />,
        title: "Futuras funcionalidades",
        desc: "Controle financeiro, relatórios automáticos, programas de fidelidade, marketing direcionado, realização de torneios e eventos.",
    },
    {
        icon: <HelpCircle className="w-6 h-6 text-green-400" />,
        title: "Suporte dedicado",
        desc: "Nossa equipe está disponível para ajudar com qualquer dúvida ou problema, garantindo que você tenha a melhor experiência possível.",
    }
];

export default function OwnerInfo() {
    return (
        <section className="min-h-screen bg-[#0a0f14] text-gray-100 py-20 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-3 text-green-400">
                    Informações para Donos de Quadra
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Entenda como o sistema funciona, como você recebe e as vantagens de fazer parte.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {infos.map((item) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#0f1720] p-6 rounded-2xl border border-gray-800 hover:border-green-600 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {item.icon}
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-16 flex flex-col items-center gap-4">
                <a
                    href="/owner-register"
                    className="px-6 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-500 transition"
                >
                    Quero me cadastrar
                </a>

                <a
                    href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre o cadastro de quadras ⚽"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-green-600 text-green-400 hover:bg-green-600 hover:text-white transition"
                >
                    <MessageCircle className="w-5 h-5" />
                    Tirar dúvidas no WhatsApp
                </a>
            </div>
        </section>
    );
}
