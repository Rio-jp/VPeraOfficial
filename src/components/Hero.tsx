"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';
import { ArrowRight, Download, Mic, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import TranslationTypewriter from './TranslationTypewriter';
import { translations } from '@/data/translations';

function ParticleBackground() {
    // Generate random particles
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number; }[]>([]);

    useEffect(() => {
        setParticles(Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        })));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/10"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

export default function Hero() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [latestVersion, setLatestVersion] = React.useState<string | null>(null);

    // Mouse Spotlight Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    React.useEffect(() => {
        fetch('https://api.github.com/repos/Rio-jp/VPera/releases/latest')
            .then(res => res.json())
            .then(data => {
                if (data.tag_name) {
                    setLatestVersion(data.tag_name);
                }
            })
            .catch(err => console.error('Failed to fetch version:', err));
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    // Variants for elements that need to wait
    const cardContainerVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } // Cards appear after title/desc
        },
    };

    const buttonContainerVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut", delay: 5.0 } // Buttons appear last
        },
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(14, 165, 233, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
                <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <ParticleBackground />
            </div>

            <motion.div
                className="container mx-auto px-6 relative z-10 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-gray-300">
                        {t('hero.badge')} {latestVersion && <span className="text-cyan-400 font-mono ml-1">{latestVersion}</span>}
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 min-h-[160px] md:min-h-[200px] flex flex-col justify-center">
                    <TranslationTypewriter
                        textJa={translations.ja.hero.title}
                        textEn={translations.en.hero.title}
                        noAnimation={true}
                    />
                    <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x pb-2">
                        <TranslationTypewriter
                            textJa={translations.ja.hero.titleHighlight}
                            textEn={translations.en.hero.titleHighlight}
                            noAnimation={true}
                        />
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed min-h-[84px]">
                    <TranslationTypewriter
                        textJa={translations.ja.hero.description}
                        textEn={translations.en.hero.description}
                        delay={500}
                    />
                </motion.p>

                <motion.div variants={buttonContainerVariants} className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="https://github.com/Rio-jp/VPera/releases/latest"
                        target="_blank"
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95"
                    >
                        <Download size={20} />
                        <span>{t('hero.download')}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#features"
                        className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
                    >
                        {t('hero.learnMore')}
                    </Link>
                </motion.div>

                {/* Floating Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                    <motion.div
                        variants={cardContainerVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="glass-panel p-6 rounded-2xl hover:border-cyan-500/50 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Mic className="text-cyan-400 mb-4 relative z-10" size={32} />
                        <h3 className="text-lg font-bold mb-2 relative z-10 min-h-[28px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.accuracy.title}
                                textEn={translations.en.hero.cards.accuracy.title}
                                delay={2000}
                            />
                        </h3>
                        <p className="text-sm text-gray-400 relative z-10 min-h-[40px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.accuracy.desc}
                                textEn={translations.en.hero.cards.accuracy.desc}
                                delay={2200}
                            />
                        </p>
                    </motion.div>
                    <motion.div
                        variants={cardContainerVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="glass-panel p-6 rounded-2xl hover:border-yellow-500/50 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Zap className="text-yellow-400 mb-4 relative z-10" size={32} />
                        <h3 className="text-lg font-bold mb-2 relative z-10 min-h-[28px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.speed.title}
                                textEn={translations.en.hero.cards.speed.title}
                                delay={2500}
                            />
                        </h3>
                        <p className="text-sm text-gray-400 relative z-10 min-h-[40px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.speed.desc}
                                textEn={translations.en.hero.cards.speed.desc}
                                delay={2700}
                            />
                        </p>
                    </motion.div>
                    <motion.div
                        variants={cardContainerVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="glass-panel p-6 rounded-2xl hover:border-purple-500/50 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Globe className="text-purple-400 mb-4 relative z-10" size={32} />
                        <h3 className="text-lg font-bold mb-2 relative z-10 min-h-[28px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.language.title}
                                textEn={translations.en.hero.cards.language.title}
                                delay={3000}
                            />
                        </h3>
                        <p className="text-sm text-gray-400 relative z-10 min-h-[40px]">
                            <TranslationTypewriter
                                textJa={translations.ja.hero.cards.language.desc}
                                textEn={translations.en.hero.cards.language.desc}
                                delay={3200}
                            />
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
