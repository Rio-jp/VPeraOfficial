"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TranslationTypewriterProps {
    textJa: string;
    textEn: string;
    className?: string;
    delay?: number;
    simple?: boolean;
    noAnimation?: boolean;
}

export default function TranslationTypewriter({ textJa, textEn, className = "", delay = 0, simple = false, noAnimation = false }: TranslationTypewriterProps) {
    const { language } = useLanguage();
    const targetText = language === 'ja' ? textJa : textEn;

    const [displayText, setDisplayText] = useState(noAnimation ? targetText : "");
    const [isTyping, setIsTyping] = useState(!noAnimation);

    // Determine start and end text based on current language
    // If JA: Start with EN -> End with JA
    // If EN: Start with JA -> End with EN
    // If simple: Start with Target -> End with Target (just typing)
    const startText = simple ? targetText : (language === 'ja' ? textEn : textJa);

    useEffect(() => {
        if (noAnimation) {
            setDisplayText(targetText);
            setIsTyping(false);
            return;
        }

        let timeoutId: NodeJS.Timeout;
        let intervalId: NodeJS.Timeout;

        // Reset state when language changes
        setDisplayText("");
        setIsTyping(true);

        const runAnimation = () => {
            const startLen = startText.length;
            const endLen = targetText.length;

            let tick = 0;

            // Calculate ratio of start text to end text
            // This ensures that the start text is fully consumed exactly when the end text is fully revealed
            const ratio = endLen > 0 ? startLen / endLen : 1;

            // Ensure we have enough head start so the typing cursor isn't overtaken by the morphing cursor
            // morphDelay + endLen must be >= startLen (roughly)
            // Add a small buffer (+5) to ensure we see the text for a bit
            const morphDelay = Math.max(10, Math.floor((startLen - endLen) / ratio) + 5);

            // Dynamic speed: If either text is long (likely English), go faster
            const isLong = Math.max(startLen, endLen) > 20;
            const speed = isLong ? 25 : 60;

            intervalId = setInterval(() => {
                const typeIndex = Math.min(tick, startLen);
                const morphIndex = Math.max(0, tick - morphDelay);

                const currentEndPart = targetText.slice(0, Math.min(morphIndex, endLen));

                // Calculate how much of the start text to hide based on morph progress
                const startCutoff = Math.floor(morphIndex * ratio);
                const currentStartPart = startText.slice(Math.min(startCutoff, startLen), typeIndex);

                // Concatenate parts
                // Only show start part if it hasn't been fully consumed
                const text = currentEndPart + currentStartPart;

                setDisplayText(text);

                if (morphIndex >= endLen && startCutoff >= startLen) {
                    clearInterval(intervalId);
                    setIsTyping(false);
                    setDisplayText(targetText); // Ensure final state
                }

                tick++;
            }, speed);
        };

        // Start after initial delay
        timeoutId = setTimeout(runAnimation, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [language, textJa, textEn, delay]);

    return (
        <span className={className}>
            {displayText}
            {isTyping && (
                <span className="animate-pulse ml-1 inline-block w-[2px] h-[1em] bg-cyan-400 align-middle" />
            )}
        </span>
    );
}
