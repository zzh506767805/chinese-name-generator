import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const initI18next = async () => {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/translation.json',
      },
      ns: ['translation'],
      defaultNS: 'translation',
      load: 'languageOnly',
      supportedLngs: ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl'],
      preload: ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl'],
      resources: {
        en: {
          translation: {
            title: "Chinese Name Assistant",
            subtitle: "Get Your Perfect Chinese Name",
            nav: {
              how_it_works: "How It Works",
              contact: "Contact"
            },
            contact: {
              message: "Please contact us via email: zzh506767805@gmail.com"
            },
            form: {
              title: "Tell Us Your Preferences",
              gender: {
                label: "Gender",
                options: {
                  male: "Male",
                  female: "Female",
                  neutral: "Neutral"
                }
              },
              meaning: {
                label: "Desired Meaning",
                placeholder: "Describe the meaning or qualities you want in your name..."
              },
              style: {
                label: "Name Style",
                options: {
                  traditional: "Traditional",
                  modern: "Modern",
                  literary: "Literary",
                  simple: "Simple"
                }
              },
              submit: "Generate Name"
            },
            result: {
              loading: "Creating your perfect name...",
              title: "Your Chinese Name",
              meaning: "Name Meaning",
              cultural_context: "Cultural Context",
              save: "Save This Name",
              generate_another: "Generate Another Name"
            },
            how_it_works: {
              step1: {
                title: "1. Enter Your Preferences",
                description: "Choose your gender preference, desired name meaning, and style. You can describe in detail the qualities and meanings you want your name to convey."
              },
              step2: {
                title: "2. AI Name Generation",
                description: "Our AI system analyzes your requirements and combines traditional Chinese culture with modern naming concepts to generate unique Chinese names for you."
              },
              step3: {
                title: "3. Understand the Meaning",
                description: "Each generated name comes with detailed explanations, including character meanings, cultural context, and symbolism, helping you understand the deeper meaning of your name."
              },
              step4: {
                title: "4. Choose and Save",
                description: "If you're satisfied with the generated name, you can save it. If not, you can continue generating new names until you find the perfect one."
              }
            }
          }
        },
        zh: {
          translation: {
            title: "中文名字助手",
            subtitle: "获得一个完美的中文名字",
            nav: {
              how_it_works: "使用说明",
              contact: "联系我们"
            },
            contact: {
              message: "请通过邮箱联系我们：zzh506767805@gmail.com"
            },
            form: {
              title: "告诉我们你的偏好",
              gender: {
                label: "性别",
                options: {
                  male: "男性",
                  female: "女性",
                  neutral: "中性"
                }
              },
              meaning: {
                label: "期望的含义",
                placeholder: "描述你希望名字包含的含义或特质..."
              },
              style: {
                label: "名字风格",
                options: {
                  traditional: "传统",
                  modern: "现代",
                  literary: "文学",
                  simple: "简约"
                }
              },
              submit: "生成名字"
            },
            result: {
              loading: "正在为你精心创作名字...",
              title: "为你推荐的名字",
              meaning: "名字含义",
              cultural_context: "文化背景",
              save: "保存此名字",
              generate_another: "重新生成"
            },
            how_it_works: {
              step1: {
                title: "1. 输入您的偏好",
                description: "选择性别偏好、期望的名字含义和风格。您可以详细描述您希望名字传达的特质和寓意。"
              },
              step2: {
                title: "2. AI 生成名字",
                description: "我们的 AI 系统会分析您的需求，结合中国传统文化和现代命名理念，为您生成独特的中文名字。"
              },
              step3: {
                title: "3. 了解名字含义",
                description: "每个生成的名字都会附带详细的解释，包括字义、文化背景和寓意，帮助您理解名字的深层含义。"
              },
              step4: {
                title: "4. 选择和保存",
                description: "如果您对生成的名字满意，可以保存下来。如果不满意，可以继续生成新的名字，直到找到最适合您的那个。"
              }
            }
          }
        },
        ja: {
          translation: {
            title: "中国語名前アシスタント",
            subtitle: "あなたにぴったりの中国語の名前を",
            nav: {
              how_it_works: "使い方",
              contact: "お問い合わせ"
            },
            contact: {
              message: "メールでお問い合わせください：zzh506767805@gmail.com"
            },
            form: {
              title: "お好みをお聞かせください",
              gender: {
                label: "性別",
                options: {
                  male: "男性",
                  female: "女性",
                  neutral: "中性"
                }
              },
              meaning: {
                label: "希望する意味",
                placeholder: "名前に込めたい意味や特徴を説明してください..."
              },
              style: {
                label: "名前のスタイル",
                options: {
                  traditional: "伝統的",
                  modern: "モダン",
                  literary: "文学的",
                  simple: "シンプル"
                }
              },
              submit: "名前を生成"
            },
            result: {
              loading: "最適な名前を作成中...",
              title: "あなたの中国語名",
              meaning: "名前の意味",
              cultural_context: "文化的背景",
              save: "この名前を保存",
              generate_another: "別の名前を生成"
            },
            how_it_works: {
              step1: {
                title: "1. 好みを入力",
                description: "性別の好み、希望する名前の意味、スタイルを選択してください。名前に込めたい特徴や意味を詳しく説明できます。"
              },
              step2: {
                title: "2. AI による名前生成",
                description: "AIシステムがあなたの要望を分析し、中国の伝統文化と現代的な命名概念を組み合わせて、ユニークな中国語名を生成します。"
              },
              step3: {
                title: "3. 名前の意味を理解",
                description: "生成された各名前には、文字の意味、文化的背景、象徴性を含む詳細な説明が付属し、名前の深い意味を理解するのに役立ちます。"
              },
              step4: {
                title: "4. 選択 保存",
                description: "生成された名前に満足したら保存できます。気に入らない場合は、完璧な名前が見つかるまで新しい名前を生成し続けることができます。"
              }
            }
          }
        },
        ko: {
          translation: {
            title: "중국어 이름 도우미",
            subtitle: "당신을 위한 완벽한 중국어 이름",
            nav: {
              how_it_works: "사용 방법",
              contact: "문의하기"
            },
            contact: {
              message: "이메일로 문의해 주세요: zzh506767805@gmail.com"
            },
            form: {
              title: "선호도를 알려주세요",
              gender: {
                label: "성별",
                options: {
                  male: "남성",
                  female: "여성",
                  neutral: "중성"
                }
              },
              meaning: {
                label: "원하는 의미",
                placeholder: "이름에 담고 싶은 의미나 특성을 설명해주세요..."
              },
              style: {
                label: "이름 스타일",
                options: {
                  traditional: "전통적",
                  modern: "현대적",
                  literary: "문학적",
                  simple: "단순"
                }
              },
              submit: "이름 생성"
            },
            result: {
              loading: "완벽한 이름을 만드는 중...",
              title: "당신의 중국어 이름",
              meaning: "이름의 의미",
              cultural_context: "문화적 배경",
              save: "이 이름 저장",
              generate_another: "다른 이름 생성"
            },
            how_it_works: {
              step1: {
                title: "1. 선호도 입력",
                description: "성별 선호도, 원하는 이름의 의미, 스타일을 선택하세요. 이름에 담고 싶은 특성과 의미를 자세히 설명할 수 있습니다."
              },
              step2: {
                title: "2. AI 이름 생성",
                description: "AI 시스템이 귀하의 요구사항을 분석하고 중국 전통 문화와 현대적 작명 개념을 결합하여 독특한 중국어 이름을 생성합니다."
              },
              step3: {
                title: "3. 이름의 의미 이해",
                description: "생성된 각 이름에는 글자의 의미, 문화적 배경, 상징성을 포함한 자세한 설명이 포함되어 이름의 깊은 의미를 이해하는 데 도움이 됩니다."
              },
              step4: {
                title: "4. 선택 및 저장",
                description: "생성된 이름이 마음에 들면 저장할 수 있습니다. 마음에 들지 않으면 완벽한 이름을 찾을 때까지 새로운 이름을 계속 생성할 수 있습니다."
              }
            }
          }
        },
        hi: {
          translation: {
            title: "चीनी नाम सहायक",
            subtitle: "अपना सही चीनी नाम पाएं",
            nav: {
              how_it_works: "कैसे काम करता है",
              contact: "संपर्क करें"
            },
            contact: {
              message: "कृपया हमें ईमेल के माध्यम से संपर्क करें: zzh506767805@gmail.com"
            },
            form: {
              title: "अपनी पसंद बताएं",
              gender: {
                label: "लिंग",
                options: {
                  male: "पुरुष",
                  female: "महिला",
                  neutral: "तटस्थ"
                }
              },
              meaning: {
                label: "वांछित अर्थ",
                placeholder: "वह अर्थ या विशेषताएं बताएं जो आप अपने नाम में चाहते हैं..."
              },
              style: {
                label: "नाम का स्टाइल",
                options: {
                  traditional: "पारंपरिक",
                  modern: "आधुनिक",
                  literary: "साहित्यिक",
                  simple: "सरल"
                }
              },
              submit: "नाम बनाएं"
            },
            result: {
              loading: "आपका सही नाम बना रहे हैं...",
              title: "आपका चीनी नाम",
              meaning: "नाम का अर्थ",
              cultural_context: "सांस्कृतिक संदर्भ",
              save: "यह नाम सहेजें",
              generate_another: "दूसरा नाम बनाएं"
            },
            how_it_works: {
              step1: {
                title: "1. अपनी पसंद दर्ज करें",
                description: "लिंग पसंद, वांछित नाम का अर्थ और स्टाइल चुनें। आप विस्तार से बता सकते हैं कि आप अपने नाम में कौन सी विशेषताएं और अर्थ चाहते हैं।"
              },
              step2: {
                title: "2. AI नाम निर्माण",
                description: "हमारी AI प्रणाली आपकी आवश्यकताओं का विश्लेषण करती है और चीनी पारंपरिक संस्कृति को आधुनिक नामकरण अवधारणाओं के साथ जोड़कर आपके लिए अनूठा चीनी नाम बनाती है।"
              },
              step3: {
                title: "3. नाम का अर्थ समझें",
                description: "प्रत्येक बनाए गए नाम के साथ विस्तृत व्याख्या दी जाती है, जिसमें अक्षरों के अर्थ, सांस्कृतिक पृष्ठभूमि और प्रतीकात्मकता शामिल है, जो आपको नाम का गहरा अर्थ समझने में मदद करती है।"
              },
              step4: {
                title: "4. चयन और सहेजें",
                description: "यदि आप बनाए गए नाम से संतुष्ट हैं, तो इसे सहेज सकते हैं। यदि नहीं, तो आप सही नाम मिलने तक नए नाम बनाते रह सकते हैं।"
              }
            }
          }
        },
        id: {
          translation: {
            title: "Asisten Nama Tionghoa",
            subtitle: "Dapatkan Nama Tionghoa Sempurna Anda",
            nav: {
              how_it_works: "Cara Kerja",
              contact: "Kontak"
            },
            contact: {
              message: "Silakan hubungi kami melalui email: zzh506767805@gmail.com"
            },
            form: {
              title: "Beri Tahu Kami Preferensi Anda",
              gender: {
                label: "Jenis Kelamin",
                options: {
                  male: "Pria",
                  female: "Wanita",
                  neutral: "Netral"
                }
              },
              meaning: {
                label: "Makna yang Diinginkan",
                placeholder: "Jelaskan makna atau kualitas yang Anda inginkan dalam nama Anda..."
              },
              style: {
                label: "Gaya Nama",
                options: {
                  traditional: "Tradisional",
                  modern: "Modern",
                  literary: "Sastra",
                  simple: "Sederhana"
                }
              },
              submit: "Buat Nama"
            },
            result: {
              loading: "Membuat nama sempurna Anda...",
              title: "Nama Tionghoa Anda",
              meaning: "Arti Nama",
              cultural_context: "Konteks Budaya",
              save: "Simpan Nama Ini",
              generate_another: "Buat Nama Lain"
            },
            how_it_works: {
              step1: {
                title: "1. Masukkan Preferensi Anda",
                description: "Pilih preferensi jenis kelamin, makna nama yang diinginkan, dan gaya. Anda dapat menjelaskan secara detail kualitas dan makna yang Anda inginkan dalam nama Anda."
              },
              step2: {
                title: "2. Pembuatan Nama AI",
                description: "Sistem AI kami menganalisis kebutuhan Anda dan menggabungkan budaya tradisional Tionghoa dengan konsep penamaan modern untuk menghasilkan nama Tionghoa yang unik untuk Anda."
              },
              step3: {
                title: "3. Pahami Makna",
                description: "Setiap nama yang dihasilkan dilengkapi dengan penjelasan terperinci, termasuk makna karakter, konteks budaya, dan simbolisme, membantu Anda memahami makna mendalam dari nama Anda."
              },
              step4: {
                title: "4. Pilih dan Simpan",
                description: "Jika Anda puas dengan nama yang dihasilkan, Anda dapat menyimpannya. Jika tidak, Anda dapat terus menghasilkan nama baru sampai Anda menemukan yang sempurna."
              }
            }
          }
        },
        tl: {
          translation: {
            title: "Chinese Name Assistant",
            subtitle: "Kunin ang Iyong Perpektong Chinese na Pangalan",
            nav: {
              how_it_works: "Paano Gumagana",
              contact: "Makipag-ugnayan"
            },
            contact: {
              message: "Mangyaring makipag-ugnayan sa amin sa email: zzh506767805@gmail.com"
            },
            form: {
              title: "Sabihin sa Amin ang Iyong mga Kagustuhan",
              gender: {
                label: "Kasarian",
                options: {
                  male: "Lalaki",
                  female: "Babae",
                  neutral: "Neutral"
                }
              },
              meaning: {
                label: "Ninanais na Kahulugan",
                placeholder: "Ilarawan ang kahulugan o mga katangiang gusto mo sa iyong pangalan..."
              },
              style: {
                label: "Istilo ng Pangalan",
                options: {
                  traditional: "Tradisyonal",
                  modern: "Makabago",
                  literary: "Pampanitikan",
                  simple: "Simple"
                }
              },
              submit: "Gumawa ng Pangalan"
            },
            result: {
              loading: "Gumagawa ng iyong perpektong pangalan...",
              title: "Ang Iyong Chinese na Pangalan",
              meaning: "Kahulugan ng Pangalan",
              cultural_context: "Kontekstong Pangkultura",
              save: "I-save ang Pangalang Ito",
              generate_another: "Gumawa ng Ibang Pangalan"
            },
            how_it_works: {
              step1: {
                title: "1. Ipasok ang Iyong mga Kagustuhan",
                description: "Piliin ang iyong kagustuhan sa kasarian, ninanais na kahulugan ng pangalan, at istilo. Maaari mong ilarawan nang detalyado ang mga katangian at kahulugang gusto mo sa iyong pangalan."
              },
              step2: {
                title: "2. Paggawa ng Pangalan ng AI",
                description: "Sinusuri ng aming AI system ang iyong mga kahilingan at pinagsasama ang tradisyonal na Chinese na kultura sa modernong konsepto ng pagpapangalan upang makabuo ng natatanging Chinese na pangalan para sa iyo."
              },
              step3: {
                title: "3. Unawain ang Kahulugan",
                description: "Ang bawat pangalang nabuo ay may kasamang detalyadong paliwanag, kabilang ang mga kahulugan ng karakter, kontekstong pangkultura, at simbolismo, na tumutulong sa iyo na maunawaan ang malalim na kahulugan ng iyong pangalan."
              },
              step4: {
                title: "4. Pumili at I-save",
                description: "Kung nasiyahan ka sa nabuong pangalan, maaari mo itong i-save. Kung hindi, maaari kang patuloy na gumawa ng mga bagong pangalan hanggang sa mahanap mo ang perpekto."
              }
            }
          }
        }
      }
    })

  return i18n
}

export default initI18next 