"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Guide() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <Header />
            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            {t('guide.title')}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t('guide.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl space-y-12"
                    >
                        {/* Step 1 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm border border-cyan-500/50">1</span>
                                {t('guide.step1.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('guide.step1.desc')}
                            </p>
                            <div className="mb-6">
                                <Link
                                    href="https://console.groq.com/keys"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50 transition-colors"
                                >
                                    {t('guide.step1.button')}
                                    <ExternalLink size={16} />
                                </Link>
                            </div>
                            <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                                <p className="text-sm text-yellow-200/80">
                                    <span className="font-bold mr-2">Note:</span>
                                    {t('guide.step1.note')}
                                </p>
                            </div>
                        </section>

                        {/* Step 2 */}
                        {/* Step 2 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm border border-cyan-500/50">2</span>
                                {t('guide.step2.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('guide.step2.desc')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <h3 className="font-bold text-white mb-2 text-sm">Microphone</h3>
                                    <p className="text-sm text-gray-400">{t('guide.step2.mic')}</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <h3 className="font-bold text-white mb-2 text-sm">System Audio</h3>
                                    <p className="text-sm text-gray-400">{t('guide.step2.system')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Step 3 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm border border-cyan-500/50">3</span>
                                {t('guide.step3.title')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('guide.step3.desc')}
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <h3 className="font-bold text-white mb-2 text-sm">My Voice (Microphone)</h3>
                                    <p className="text-sm text-gray-400">{t('guide.step3.myVoice')}</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <h3 className="font-bold text-white mb-2 text-sm">Partner (System Audio)</h3>
                                    <p className="text-sm text-gray-400">{t('guide.step3.partner')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Step 3 */}


                        {/* Settings Reference */}
                        <section className="pt-12 border-t border-white/10">
                            <h2 className="text-3xl font-bold mb-8 text-white text-center">
                                {t('settingsReference.title')}
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {/* Enable Translation */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.enableTranslation.title')}</h3>
                                    <p className="text-gray-300">{t('settingsReference.enableTranslation.desc')}</p>
                                </div>

                                {/* Groq API Key */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.groqKey.title')}</h3>
                                    <p className="text-gray-300">{t('settingsReference.groqKey.desc')}</p>
                                </div>

                                {/* My Voice */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.myVoice.title')}</h3>
                                    <p className="text-gray-300 mb-4">{t('settingsReference.myVoice.desc')}</p>
                                    <ul className="space-y-2 text-sm text-gray-400 bg-black/20 p-4 rounded-lg">
                                        <li>• {t('settingsReference.myVoice.source')}</li>
                                        <li>• {t('settingsReference.myVoice.target')}</li>
                                        <li className="pt-2 text-gray-500">{t('settingsReference.myVoice.languages')}</li>
                                    </ul>
                                </div>

                                {/* Partner */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.partner.title')}</h3>
                                    <p className="text-gray-300 mb-4">{t('settingsReference.partner.desc')}</p>
                                    <ul className="space-y-2 text-sm text-gray-400 bg-black/20 p-4 rounded-lg">
                                        <li>• {t('settingsReference.partner.source')}</li>
                                        <li>• {t('settingsReference.partner.target')}</li>
                                    </ul>
                                </div>

                                {/* OSC Output */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.osc.title')}</h3>
                                    <p className="text-gray-300 mb-4">{t('settingsReference.osc.desc')}</p>
                                    <ul className="space-y-2 text-sm text-gray-400 bg-black/20 p-4 rounded-lg">
                                        <li>• {t('settingsReference.osc.params')}</li>
                                        <li>• {t('settingsReference.osc.micTranscription')}</li>
                                        <li>• {t('settingsReference.osc.micTranslation')}</li>
                                    </ul>
                                </div>

                                {/* Model Size */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{t('settingsReference.modelSize.title')}</h3>
                                    <p className="text-gray-300 mb-4">{t('settingsReference.modelSize.desc')}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-black/20 p-4 rounded-lg">
                                            <span className="text-green-400 font-bold block mb-1">GroqCloud</span>
                                            <span className="text-sm text-gray-400">{t('settingsReference.modelSize.groq')}</span>
                                        </div>
                                        <div className="bg-black/20 p-4 rounded-lg">
                                            <span className="text-yellow-400 font-bold block mb-1">Others (Local)</span>
                                            <span className="text-sm text-gray-400">{t('settingsReference.modelSize.local')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
