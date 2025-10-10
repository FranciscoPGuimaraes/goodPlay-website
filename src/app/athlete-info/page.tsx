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
        desc: "Encontre quadras disponíveis, veja horários e preços, e reserve diretamente pelo app. Pague de forma segura via Pix ou cartão, e avalie sua experiência com a quadra e os donos.",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-green-400" />,
        title: "Meio de pagamento",
        desc: "O pagamento é feito diretamente no app, de forma segura. Você recebe confirmação imediata e histórico de reservas. Cancelamentos seguem política transparente definida pelo dono da quadra.",
    },
    {
        icon: <CheckCircle className="w-6 h-6 text-green-400" />,
        title: "Vantagens",
        desc: "Reserve de forma prática, participe de torneios e eventos locais, acompanhe suas reservas e aproveite promoções exclusivas.",
    },
    {
        icon: <Handshake className="w-6 h-6 text-green-400" />,
        title: "Parcerias",
        desc: "Acesse parcerias com marcas esportivas e torneios locais. Receba descontos e benefícios especiais como atleta registrado no app.",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-green-400" />,
        title: "Futuras funcionalidades",
        desc: "Acompanhe rankings de jogadores, programas de fidelidade, notificações de torneios e eventos, além de estatísticas pessoais de desempenho.",
    },
    {
        icon: <HelpCircle className="w-6 h-6 text-green-400" />,
        title: "Suporte dedicado",
        desc: "Nossa equipe está disponível para ajudar com qualquer dúvida ou problema, garantindo a melhor experiência para você como atleta.",
    }
];

export default function AthleteInfo() {
    return (
        <section className="min-h-screen bg-[#0a0f14] text-gray-100 py-20 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-3 text-green-400">
                    Informações para Atletas
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Descubra como encontrar quadras, reservar horários e aproveitar todas as vantagens de usar nosso app.
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
                    href="/athlete-register"
                    className="px-6 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-500 transition"
                >
                    Quero me cadastrar
                </a>

                <a
                    href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre cadastro de atletas ⚽"
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
