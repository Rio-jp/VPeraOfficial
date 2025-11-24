"use client";
import React from 'react';
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-12 border-t border-white/10 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">V-Pera</h3>
                        <p className="text-sm text-gray-500">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            {t('footer.privacy')}
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            {t('footer.terms')}
                        </Link>
                        <Link href="https://x.com/rio_engineer" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Twitter size={16} />
                            {t('footer.contact')}
                        </Link>
                    </div>

                    <div className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Rio-jp. {t('footer.rights')}
                    </div>
                </div>
            </div>
        </footer>
    );
}
