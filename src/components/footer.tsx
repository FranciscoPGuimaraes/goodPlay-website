"use client";

// ------------------------------
// File: components/Footer.tsx
// ------------------------------
import React from 'react'
import Link from 'next/link'


const Footer: React.FC = () => {
    return (
        <footer className="mt-12 bg-[#050608] py-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/logo.png" alt="GoodPlay" className="h-10 w-auto" />
                            <span className="font-bold">GoodPlay</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-400 max-w-md">Conectando donos de quadras a atletas com segurança, parcerias e diversão.</p>
                    </div>


                    <div className="flex gap-6">
                        <a href="#" className="text-sm">Contato</a>
                        <a href="#" className="text-sm">Termos</a>
                        <a href="#" className="text-sm">Política de privacidade</a>
                    </div>
                </div>


                <div className="mt-8 text-center text-xs text-gray-600">© {new Date().getFullYear()} GoodPlay — Todos os direitos reservados</div>
            </div>
        </footer>
    )
}


export default Footer