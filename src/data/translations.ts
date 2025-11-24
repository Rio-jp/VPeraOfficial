export const translations = {
    ja: {
        header: {
            features: "機能",
            screenshots: "スクリーンショット",
            download: "ダウンロード",
        },
        hero: {
            badge: "最新リリース",
            title: "言葉の壁を、",
            titleHighlight: "超えていく",
            description: "リアルタイム音声認識と翻訳で、あらゆるアプリケーションでのコミュニケーションを加速させます。最新AI搭載で、驚異的なスピードを実現。",
            download: "Windows版をダウンロード",
            learnMore: "詳しく見る",
            cards: {
                accuracy: {
                    title: "高精度な認識",
                    desc: "OpenAIのWhisperモデルを採用し、正確な文字起こしを実現。"
                },
                speed: {
                    title: "超高速レスポンス",
                    desc: "最新のAIチップを活用し、瞬時の翻訳と表示を可能に。"
                },
                language: {
                    title: "多言語対応",
                    desc: "日本語、英語、中国語など、主要な言語間の翻訳に対応。"
                }
            }
        },
        features: {
            title: "パワフルな機能",
            subtitle: "バーチャル空間でのコミュニケーションに必要なすべてがここに。",
            items: {
                transcription: {
                    title: "リアルタイム文字起こし",
                    desc: "高精度AIがあなたの声を瞬時にテキスト化します。"
                },
                translation: {
                    title: "即時翻訳",
                    desc: "マイク音声とシステム音声を、設定した言語へリアルタイムに翻訳。"
                },
                osc: {
                    title: "外部連携 (OSC)",
                    desc: "文字起こし結果を外部アプリケーションへ直接送信可能。"
                },
                overlay: {
                    title: "一括表示",
                    desc: "マイク音声とシステム音声の文字起こし・翻訳結果を、アプリ内でまとめて表示します。"
                },
                groq: {
                    title: "最新AI搭載",
                    desc: "最先端のAI技術により、遅延を感じさせない体験を提供。"
                },
                privacy: {
                    title: "プライバシー重視",
                    desc: "APIキーはローカルに保存され、会話データが収集されることはありません。"
                }
            }
        },
        screenshots: {
            title: "直感的なインターフェース",
            subtitle: "誰でも簡単に使える、シンプルで美しいデザイン。",
            main: "メイン画面",
            settings: "設定画面"
        },
        footer: {
            tagline: "言葉の壁を超えて、世界とつながる。",
            privacy: "プライバシーポリシー",
            terms: "利用規約",
            contact: "お問い合わせ",
            rights: "All rights reserved."
        },
        privacyPage: {
            title: "プライバシーポリシー",
            lastUpdated: "最終更新日",
            sections: {
                1: {
                    title: "1. 収集する情報",
                    content: "V-Pera（以下「本アプリ」）は、ユーザーのプライバシーを最大限に尊重します。本アプリは、以下の情報を収集・保存・送信することはありません。",
                    list: [
                        "音声データ（すべてローカルで処理、または一時的にAPIへ送信され即座に破棄されます）",
                        "個人を特定できる情報（氏名、住所、メールアドレスなど）",
                        "会話の内容や履歴"
                    ]
                },
                2: {
                    title: "2. APIキーの管理",
                    content: "ユーザーが入力したAPIキー（Groq API Keyなど）は、ユーザーのローカル環境（PC内）にのみ暗号化されて保存されます。開発者や第三者のサーバーに送信されることは一切ありません。"
                },
                3: {
                    title: "3. 外部サービス",
                    content: "本アプリは、音声認識および翻訳のために以下のサードパーティサービスを利用する場合があります。",
                    groq: {
                        title: "Groq API",
                        desc: "高速な推論処理のために使用されます。データの取り扱いについては、Groq社のプライバシーポリシーをご確認ください。"
                    }
                },
                4: {
                    title: "4. お問い合わせ",
                    content: "本ポリシーに関するご質問は、フッターの「お問い合わせ」リンク（X/Twitter）よりご連絡ください。"
                }
            }
        },
        termsPage: {
            title: "利用規約",
            lastUpdated: "最終更新日",
            sections: {
                1: {
                    title: "1. 規約への同意",
                    content: "V-Pera（以下「本アプリ」）をダウンロード、インストール、または使用することにより、本規約に同意したものとみなされます。本規約に同意しない場合は、本アプリを使用することはできません。"
                },
                2: {
                    title: "2. 免責事項",
                    content1: "本アプリは「現状有姿」で提供されます。開発者は、本アプリの使用によって生じた、いかなる損害（データの損失、業務の中断、精神的苦痛などを含む）についても一切の責任を負いません。",
                    content2: "また、本アプリが特定の目的に適合すること、バグやエラーがないことを保証するものではありません。"
                },
                3: {
                    title: "3. 禁止事項",
                    intro: "ユーザーは、本アプリの利用にあたり、以下の行為を行ってはなりません。",
                    list: [
                        "本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブル",
                        "違法な目的、または公序良俗に反する目的での使用",
                        "他者の知的財産権、プライバシー権、その他の権利を侵害する行為",
                        "本アプリの運営を妨害する行為"
                    ]
                },
                4: {
                    title: "4. 規約の変更",
                    content: "開発者は、必要に応じて本規約を随時変更する権利を留保します。変更後の規約は、本ウェブサイトに掲載された時点で効力を生じるものとします。重要な変更がある場合は、適切な方法で通知するよう努めます。"
                }
            }
        }
    },
    en: {
        header: {
            features: "Features",
            screenshots: "Screenshots",
            download: "Download",
        },
        hero: {
            badge: "Latest Release",
            title: "Break Language Barriers",
            titleHighlight: "Everywhere",
            description: "Real-time speech-to-text and translation for any application. Powered by latest AI for lightning-fast performance.",
            download: "Download for Windows",
            learnMore: "Learn More",
            cards: {
                accuracy: {
                    title: "High Accuracy",
                    desc: "Powered by OpenAI's Whisper models for precise transcription."
                },
                speed: {
                    title: "Ultra Fast",
                    desc: "Leverages latest AI chips for near-instantaneous results."
                },
                language: {
                    title: "Multi-Language",
                    desc: "Translate between Japanese, English, Chinese, and more."
                }
            }
        },
        features: {
            title: "Powerful Features",
            subtitle: "Everything you need to communicate effectively.",
            items: {
                transcription: {
                    title: "Real-time Transcription",
                    desc: "Instantly converts speech to text with high accuracy."
                },
                translation: {
                    title: "Instant Translation",
                    desc: "Translate your voice and system audio into multiple languages."
                },
                osc: {
                    title: "OSC Integration",
                    desc: "Send transcriptions directly to external applications via OSC."
                },
                overlay: {
                    title: "Unified Display",
                    desc: "Displays transcription and translation results for both microphone and system audio together within the app."
                },
                groq: {
                    title: "Latest AI Powered",
                    desc: "Utilizes state-of-the-art AI for lightning-fast inference speeds."
                },
                privacy: {
                    title: "Privacy First",
                    desc: "Your API keys are stored locally. We don't track your conversations."
                }
            }
        },
        screenshots: {
            title: "Intuitive Interface",
            subtitle: "Clean, simple, and easy to use.",
            main: "Main Interface",
            settings: "Settings"
        },
        footer: {
            tagline: "Breaking language barriers, connecting the world.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact",
            rights: "All rights reserved."
        },
        privacyPage: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated",
            sections: {
                1: {
                    title: "1. Information Collection",
                    content: "V-Pera (hereinafter referred to as \"this app\") respects your privacy. We do not collect, store, or transmit the following information:",
                    list: [
                        "Voice data (processed locally or temporarily sent to API and immediately discarded)",
                        "Personally identifiable information (name, address, email, etc.)",
                        "Conversation content or history"
                    ]
                },
                2: {
                    title: "2. API Key Management",
                    content: "API keys entered by the user (such as Groq API Key) are encrypted and stored only in the user's local environment (PC). They are never sent to the developer's or third-party servers."
                },
                3: {
                    title: "3. External Services",
                    content: "This app may use the following third-party services for speech recognition and translation.",
                    groq: {
                        title: "Groq API",
                        desc: "Used for high-speed inference processing. Please refer to Groq's privacy policy for data handling."
                    }
                },
                4: {
                    title: "4. Contact",
                    content: "For questions regarding this policy, please contact us via the \"Contact\" link (X/Twitter) in the footer."
                }
            }
        },
        termsPage: {
            title: "Terms of Service",
            lastUpdated: "Last Updated",
            sections: {
                1: {
                    title: "1. Acceptance of Terms",
                    content: "By downloading, installing, or using V-Pera (hereinafter referred to as \"this app\"), you agree to these terms. If you do not agree, you may not use this app."
                },
                2: {
                    title: "2. Disclaimer",
                    content1: "This app is provided \"as is\". The developer is not responsible for any damages (including data loss, business interruption, mental distress, etc.) caused by the use of this app.",
                    content2: "We do not guarantee that this app fits a specific purpose or is free of bugs or errors."
                },
                3: {
                    title: "3. Prohibited Acts",
                    intro: "Users must not perform the following acts when using this app:",
                    list: [
                        "Reverse engineering, decompiling, or disassembling this app",
                        "Use for illegal purposes or purposes contrary to public order and morals",
                        "Acts that infringe on the intellectual property rights, privacy rights, or other rights of others",
                        "Acts that interfere with the operation of this app"
                    ]
                },
                4: {
                    title: "4. Changes to Terms",
                    content: "The developer reserves the right to change these terms at any time as needed. The modified terms shall take effect when posted on this website. We will make efforts to notify you of significant changes in an appropriate manner."
                }
            }
        }
    }
};
