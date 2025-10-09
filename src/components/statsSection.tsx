"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const metrics = [
    { label: 'Atletas', value: 12450 },
    { label: 'Quadras', value: 820 },
    { label: 'Aluguéis', value: 52340 },
    { label: 'Downloads', value: 40200 }
]

function useCount(target: number, duration = 1500) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const stepTime = Math.max(10, Math.floor(duration / target))
        const timer = setInterval(() => {
            start += Math.ceil(target / (duration / stepTime))
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else setCount(start)
        }, stepTime)

        return () => clearInterval(timer)
    }, [target, duration])

    return count
}

const StatsSection: React.FC = () => {
    return (
        <section id="stats" className="mt-12 py-12 border-t border-gray-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {metrics.map((m) => (
                    <motion.div
                        key={m.label}
                        className="p-6 bg-[#081018]/50 rounded-lg"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Metric value={m.value} label={m.label} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

const Metric: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const count = useCount(value)
    return (
        <div>
            <div className="text-3xl font-extrabold">{count.toLocaleString()}</div>
            <div className="mt-1 text-sm text-gray-400">{label}</div>
        </div>
    )
}

export default StatsSection
