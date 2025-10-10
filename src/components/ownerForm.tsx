'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InputMask from 'react-input-mask'

export default function OwnerForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 🔧 Aqui você integraria com sua API
        console.log('Form data:', form)
        alert('Cadastro enviado com sucesso!')
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-[#141416] p-8 rounded-2xl shadow-lg border border-gray-800"
        >
            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-gray-700 focus:border-green-400 focus:outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-gray-700 focus:border-green-400 focus:outline-none"
                />

                <InputMask
                    mask="(99) 99999-9999"
                    name="phone"
                    placeholder="Telefone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-gray-700 focus:border-green-400 focus:outline-none"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-gray-700 focus:border-green-400 focus:outline-none"
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar senha"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-gray-700 focus:border-green-400 focus:outline-none"
                />
            </div>

            {/* Botão corrigido */}
            <button
                type="submit"
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#141416]"
            >
                Cadastrar
            </button>
        </motion.form>
    )
}
