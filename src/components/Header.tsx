"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/basePath';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src={getAssetPath('/icon.png')}
                        alt="V-Pera Logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                    />
                    <span className="text-xl font-bold tracking-tight text-white">V-Pera</span>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                <Link href="/#features" className="hover:text-white transition-colors">{t('header.features')}</Link>
                <Link href="/#screenshots" className="hover:text-white transition-colors">{t('header.screenshots')}</Link>
                <Link href="/guide" className="hover:text-white transition-colors">{t('header.guide')}</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase"
                >
                    {language === 'ja' ? 'English' : '日本語'}
                </button>
                <Link
                    href="https://rio-sw.booth.pm/items/7685441"
                    target="_blank"
                    className="hidden md:block px-5 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                    {t('header.download')}
                </Link>
            </div>
        </motion.header>
    );
}
