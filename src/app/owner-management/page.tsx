"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { motion } from "framer-motion";
import Image from "next/image";

const locales = { "pt-BR": ptBR };

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Mock das quadras
const fields = [
    {
        id: 1,
        name: "Quadra Geraldo Rosa",
        address: "R. Fulano da Silva, 121, Inatel",
        image:
            "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Quadra José Bento",
        address: "R. Ciclano Souza, 54, Centro",
        image:
            "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=80",
    },
];

// Mock de reservas
const eventos = [
    {
        title: "Reserva - João",
        start: new Date(2025, 9, 12, 17, 0),
        end: new Date(2025, 9, 12, 18, 0),
    },
    {
        title: "Reserva - Maria",
        start: new Date(2025, 9, 14, 15, 0),
        end: new Date(2025, 9, 14, 16, 30),
    },
    {
        title: "Reserva - Lucas",
        start: new Date(2025, 9, 15, 10, 0),
        end: new Date(2025, 9, 15, 11, 30),
    },
    {
        title: "Reserva - Lucas",
        start: new Date(2025, 9, 15, 12, 30),
        end: new Date(2025, 9, 15, 13, 30),
    },
    {
        title: "Reserva - Lucas",
        start: new Date(2025, 9, 15, 14, 30),
        end: new Date(2025, 9, 15, 15, 30),
    },
];

export default function OwnerManagement() {
    const [selectedField, setSelectedField] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#0b0b0d] text-gray-100 px-6 md:px-20 py-12 relative">
            {/* Header com logo */}
            <header className="absolute top-6 left-6 flex items-center z-50">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/logo.png"
                        alt="GoodPlay logo"
                        width={100}
                        height={100}
                        className="h-10 w-auto drop-shadow-lg"
                        priority
                    />
                </motion.div>
            </header>

            {/* Conteúdo principal */}
            <div className="pt-20">
                {/* Seção 1: Suas Quadras */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Suas Quadras</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fields.map((field) => (
                            <motion.div
                                key={field.id}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                                onClick={() => setSelectedField(field.id)}
                                className={`cursor-pointer bg-[#111b14] rounded-xl border ${selectedField === field.id
                                    ? "border-green-500 shadow-lg shadow-green-500/20"
                                    : "border-gray-800"
                                    } overflow-hidden`}
                            >
                                <img
                                    src={field.image}
                                    alt={field.name}
                                    className="h-40 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-white">
                                        {field.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{field.address}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Seção 2: Agenda */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Agenda de Reservas</h2>
                    <div className="bg-[#111b14] rounded-xl p-4 border border-gray-800">
                        <Calendar
                            localizer={localizer}
                            events={eventos}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                            messages={{
                                next: "Próximo",
                                previous: "Anterior",
                                today: "Hoje",
                                month: "Mês",
                                week: "Semana",
                                day: "Dia",
                            }}
                            eventPropGetter={() => ({
                                style: {
                                    backgroundColor: "#22c55e",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    border: "none",
                                    padding: "4px",
                                },
                            })}
                            dayPropGetter={() => ({
                                style: { backgroundColor: "#0b0b0d" },
                            })}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
