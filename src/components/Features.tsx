"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Radio, Layers, Zap, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <MessageSquare className="text-cyan-400" size={32} />,
            title: t('features.items.transcription.title'),
            description: t('features.items.transcription.desc')
        },
        {
            icon: <Globe className="text-purple-400" size={32} />,
            title: t('features.items.translation.title'),
            description: t('features.items.translation.desc')
        },
        {
            icon: <Radio className="text-green-400" size={32} />,
            title: t('features.items.osc.title'),
            description: t('features.items.osc.desc')
        },
        {
            icon: <Layers className="text-blue-400" size={32} />,
            title: t('features.items.overlay.title'),
            description: t('features.items.overlay.desc')
        },
        {
            icon: <Zap className="text-yellow-400" size={32} />,
            title: t('features.items.groq.title'),
            description: t('features.items.groq.desc')
        },
        {
            icon: <Lock className="text-red-400" size={32} />,
            title: t('features.items.privacy.title'),
            description: t('features.items.privacy.desc')
        }
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
