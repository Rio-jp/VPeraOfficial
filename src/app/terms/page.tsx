"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function TermsOfService() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <Header />
            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            {t('termsPage.title')}
                        </h1>
                        <p className="text-gray-400">
                            {t('termsPage.lastUpdated')}: {new Date().toLocaleDateString()}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl space-y-12"
                    >
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                                <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
                                {t('termsPage.sections.1.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {t('termsPage.sections.1.content')}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                                <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
                                {t('termsPage.sections.2.title')}
                            </h2>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    {t('termsPage.sections.2.content1')}
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('termsPage.sections.2.content2')}
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                                <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
                                {t('termsPage.sections.3.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                {t('termsPage.sections.3.intro')}
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(t('termsPage.sections.3.list') as unknown as string[]).map((item, index) => (
                                    <li key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 text-gray-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                                <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
                                {t('termsPage.sections.4.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {t('termsPage.sections.4.content')}
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
