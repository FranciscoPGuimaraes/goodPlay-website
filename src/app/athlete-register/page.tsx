"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AthleteRegister() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true); // ativa animação de QR code
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0f14] text-gray-100 px-6">
            {!submitted ? (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0f1720] p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-green-400">
                        Cadastro de Atleta
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 rounded-md bg-[#1a2430] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 rounded-md bg-[#1a2430] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                required
                                className="w-full mt-1 p-2 rounded-md bg-[#1a2430] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Senha</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 rounded-md bg-[#1a2430] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Confirmar senha</label>
                            <input
                                type="password"
                                name="confirm"
                                value={form.confirm}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 rounded-md bg-[#1a2430] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 py-2 bg-green-600 hover:bg-green-500 transition font-semibold rounded-md"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <p className="text-center text-gray-400 text-sm mt-4">
                        Já possui uma conta?{" "}
                        <a href="/login" className="text-green-400 hover:underline">
                            Entrar
                        </a>
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-4"
                >
                    <img
                        src="/assets/qrcode.png"
                        alt="QR Code do app"
                        className="w-48 h-48"
                    />
                    <p className="text-white text-lg font-semibold text-center">
                        Baixe nosso app e comece a reservar quadras!
                    </p>

                    <button
                        onClick={() => {
                            console.log("Redirecionar para download do app ou link específico");
                        }}
                        className="w-full py-2 bg-green-600 hover:bg-green-500 transition font-semibold rounded-md"
                    >
                        Baixar o aplicativo
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full mt-2 py-2 bg-gray-700 hover:bg-gray-600 transition font-semibold rounded-md"
                    >
                        Fechar
                    </button>
                </motion.div>
            )}
        </section>
    );
}
