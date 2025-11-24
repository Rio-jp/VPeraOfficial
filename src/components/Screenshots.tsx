"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import Image from 'next/image';

export default function Screenshots() {
    const { t } = useLanguage();

    return (
        <section id="screenshots" className="py-24 bg-black/40">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('screenshots.title')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('screenshots.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="aspect-video bg-gray-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        <Image
                            src="/screenshot1.png"
                            alt={t('screenshots.main')}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="aspect-video bg-gray-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        <Image
                            src="/screenshot2.png"
                            alt={t('screenshots.settings')}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
