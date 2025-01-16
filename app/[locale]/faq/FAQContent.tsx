'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

type FAQSection = {
  question: string
  answer: string
}

type FAQTranslations = {
  title: string
  what_makes_good_name: FAQSection
  name_structure: FAQSection
  meaning_importance: FAQSection
  common_characters: FAQSection
  gender_specific: FAQSection
  name_taboos: FAQSection
  pronunciation: FAQSection
  cultural_significance: FAQSection
}

type Translations = {
  en: FAQTranslations
  zh: FAQTranslations
  ja: FAQTranslations
  ko: FAQTranslations
  hi: FAQTranslations
  id: FAQTranslations
  tl: FAQTranslations
}

export default function FAQContent() {
  const params = useParams() || { locale: 'en' }
  const locale = (params.locale as string) || 'en'

  const faqSections = [
    'what_makes_good_name',
    'name_structure',
    'meaning_importance',
    'common_characters',
    'gender_specific',
    'name_taboos',
    'pronunciation',
    'cultural_significance'
  ] as const

  const translations: Translations = {
    en: {
      title: 'Frequently Asked Questions About Chinese Names',
      what_makes_good_name: {
        question: 'What makes a good Chinese name?',
        answer: 'A good Chinese name typically has several key characteristics: meaningful characters that convey positive attributes, harmonious pronunciation, appropriate complexity (usually 2-3 characters), and cultural relevance. The name should also be easy to pronounce and write, while avoiding any negative connotations in Chinese culture.'
      },
      name_structure: {
        question: 'How is a Chinese name structured?',
        answer: 'A Chinese name traditionally consists of a family name (surname) followed by a given name. The surname is usually one character, while the given name can be one or two characters. For example, in the name "李明" (Li Ming), "李" is the surname and "明" is the given name.'
      },
      meaning_importance: {
        question: 'How important is the meaning of characters in Chinese names?',
        answer: 'The meaning of characters is extremely important in Chinese names. Each character carries specific meanings and cultural connotations. Parents often choose characters that represent their hopes and wishes for their child, such as virtues, natural elements, or positive qualities like wisdom, strength, or beauty.'
      },
      common_characters: {
        question: 'What are some common characters used in Chinese names?',
        answer: 'Common characters in Chinese names often relate to virtues, natural elements, or positive qualities. For example: "明" (bright), "华" (splendid), "伟" (great), "丽" (beautiful), "智" (wise), "强" (strong), "雪" (snow), "海" (ocean), and "文" (cultural, refined).'
      },
      gender_specific: {
        question: 'Are Chinese names gender-specific?',
        answer: 'While Chinese names can be gender-neutral, many characters are traditionally associated with specific genders. Characters suggesting beauty, grace, or gentleness are often used for girls (like "美", "婷", "静"), while characters implying strength, ambition, or leadership are common for boys (like "强", "伟", "志").'
      },
      name_taboos: {
        question: 'Are there any taboos in Chinese naming?',
        answer: 'Yes, there are several naming taboos in Chinese culture: avoiding names of ancestors or respected figures, avoiding unlucky numbers or negative meanings, not using characters that are too complex or rare, and being mindful of the combination of characters that might create unfortunate meanings when read together.'
      },
      pronunciation: {
        question: 'How important is the pronunciation of a Chinese name?',
        answer: 'Pronunciation is crucial in Chinese names. A good name should have a pleasant sound when spoken, with characters that flow well together. The tones of the characters should also be considered, as they can affect the overall harmony of the name. Additionally, the name should be relatively easy for both Chinese and non-Chinese speakers to pronounce.'
      },
      cultural_significance: {
        question: 'What is the cultural significance of Chinese names?',
        answer: 'Chinese names carry deep cultural significance. They reflect traditional values, family hopes, and cultural identity. Names often connect individuals to their family history, cultural heritage, and personal aspirations. In Chinese culture, a name is considered to influence a person\'s destiny and character, making the naming process particularly important.'
      }
    },
    zh: {
      title: '关于中文名字的常见问题',
      what_makes_good_name: {
        question: '什么样的中文名字是好名字？',
        answer: '一个好的中文名字通常具有以下特点：字义积极向上、发音和谐、复杂度适中（通常2-3个字）、具有文化内涵。名字应该易于发音和书写，同时避免在中国文化中的负面含义。'
      },
      name_structure: {
        question: '中文名字的结构是怎样的？',
        answer: '中文名字传统上由姓氏（家族名）和名字组成。姓氏通常是一个字，而名字可以是一个或两个字。例如，在"李明"这个名字中，"李"是姓氏，"明"是名字。'
      },
      meaning_importance: {
        question: '汉字的含义在起名中有多重要？',
        answer: '汉字的含义在中文名字中极其重要。每个字都带有特定的含义和文化内涵。父母通常会选择能代表他们对孩子期望和祝愿的字，如美德、自然元素，或智慧、力量、美丽等积极品质。'
      },
      common_characters: {
        question: '中文名字中常用的字有哪些？',
        answer: '中文名字中常用的字通常与美德、自然元素或积极品质有关。例如："明"（明亮）、"华"（华丽）、"伟"（伟大）、"丽"（美丽）、"智"（智慧）、"强"（强壮）、"雪"（雪）、"海"（海洋）和"文"（文化、文雅）。'
      },
      gender_specific: {
        question: '中文名字有性别之分吗？',
        answer: '虽然中文名字可以是中性的，但许多汉字传统上与特定性别相关。表示美丽、优雅或温柔的字通常用于女性名字（如"美"、"婷"、"静"），而表示力量、抱负或领导力的字通常用于男性名字（如"强"、"伟"、"志"）。'
      },
      name_taboos: {
        question: '起中文名字有什么禁忌吗？',
        answer: '是的，中国文化中有几个起名禁忌：避免使用祖先或受尊敬人物的名字，避免不吉利的数字或负面含义，不使用过于复杂或罕见的字，注意字的组合可能产生的不良含义。'
      },
      pronunciation: {
        question: '中文名字的发音有多重要？',
        answer: '发音在中文名字中非常重要。好的名字在发音上应该悦耳，字与字之间要流畅。还要考虑字的声调，因为声调会影响名字的整体和谐性。此外，名字应该相对容易被中文和非中文使用者发音。'
      },
      cultural_significance: {
        question: '中文名字的文化意义是什么？',
        answer: '中文名字具有深厚的文化意义。它们反映了传统价值观、家庭期望和文化认同。名字常常将个人与家族历史、文化遗产和个人抱负联系在一起。在中国文化中，名字被认为会影响一个人的命运和性格，这使得起名过程特别重要。'
      }
    },
    ja: {
      title: '中国語の名前に関するよくある質問',
      what_makes_good_name: {
        question: '良い中国語の名前とはどのようなものですか？',
        answer: '良い中国語の名前には、以下のような特徴があります：ポジティブな意味を持つ文字、調和の取れた発音、適度な複雑さ（通常2-3文字）、文化的な意味合いを持つこと。また、発音と書き方が簡単で、中国文化においてネガティブな意味を持たないことも重要です。'
      },
      name_structure: {
        question: '中国語の名前の構造はどうなっていますか？',
        answer: '中国語の名前は伝統的に姓（家族名）と名前で構成されています。姓は通常1文字で、名前は1文字または2文字です。例えば、"李明"という名前では、"李"が姓で、"明"が名前です。'
      },
      meaning_importance: {
        question: '名前の漢字の意味はどれくらい重要ですか？',
        answer: '漢字の意味は中国語の名前において非常に重要です。各文字には特定の意味と文化的な含意があります。両親は通常、美徳、自然の要素、または知恵、強さ、美しさなどのポジティブな特質を表す文字を選びます。'
      },
      common_characters: {
        question: '中国語の名前でよく使われる漢字は何ですか？',
        answer: '中国語の名前でよく使われる漢字は、美徳、自然の要素、またはポジティブな特質に関連するものです。例えば："明"（明るい）、"華"（華やか）、"伟"（偉大）、"丽"（美しい）、"智"（賢い）、"強"（強い）、"雪"（雪）、"海"（海）、"文"（文化的、洗練された）などです。'
      },
      gender_specific: {
        question: '中国語の名前には性別による違いがありますか？',
        answer: '中国語の名前は性別を問わないものもありますが、多くの漢字は伝統的に特定の性別と結びついています。美しさ、優雅さ、優しさを表す文字は女性の名前によく使われ（"美"、"婷"、"静"など）、力強さ、志、リーダーシップを表す文字は男性の名前によく使われます（"強"、"伟"、"志"など）。'
      },
      name_taboos: {
        question: '中国語の名前にタブーはありますか？',
        answer: 'はい、中国文化には命名に関するいくつかのタブーがあります：先祖や尊敬される人物の名前を避ける、不吉な数字や否定的な意味を避ける、複雑すぎる、または珍しすぎる文字を使わない、文字の組み合わせで不適切な意味にならないよう注意することなどです。'
      },
      pronunciation: {
        question: '中国語の名前の発音はどれくらい重要ですか？',
        answer: '発音は中国語の名前において非常に重要です。良い名前は耳に心地よく、文字と文字の間の流れがスムーズである必要があります。また、声調も考慮する必要があります。さらに、中国語話者以外の人にとっても比較的発音しやすい名前であることが望ましいです。'
      },
      cultural_significance: {
        question: '中国語の名前の文化的な意義は何ですか？',
        answer: '中国語の名前には深い文化的意義があります。伝統的な価値観、家族の期待、文化的アイデンティティを反映しています。名前は個人と家族の歴史、文化遺産、個人の願望をつなぐものです。中国文化では、名前は人の運命や性格に影響を与えると考えられており、そのため命名は特に重要なプロセスとなっています。'
      }
    },
    ko: {
      title: '중국어 이름에 대한 자주 묻는 질문',
      what_makes_good_name: {
        question: '좋은 중국어 이름의 특징은 무엇인가요?',
        answer: '좋은 중국어 이름은 긍정적인 특성을 나타내는 의미 있는 글자, 조화로운 발음, 적절한 복잡성(보통 2-3자), 문화적 관련성을 가집니다. 또한 발음하고 쓰기 쉬우면서도 중국 문화에서 부정적인 의미를 피해야 합니다.'
      },
      name_structure: {
        question: '중국어 이름은 어떻게 구성되나요?',
        answer: '중국어 이름은 전통적으로 성(姓)과 이름으로 구성됩니다. 성은 보통 한 글자이며, 이름은 한 글자나 두 글자일 수 있습니다. 예를 들어, "李明" (리밍)에서 "李"는 성이고 "明"은 이름입니다.'
      },
      meaning_importance: {
        question: '중국어 이름에서 글자의 의미는 얼마나 중요한가요?',
        answer: '중국어 이름에서 글자의 의미는 매우 중요합니다. 각 글자는 특정한 의미와 문화적 함의를 가지고 있습니다. 부모들은 종종 지혜, 힘, 아름다움과 같은 덕목, 자연 요소, 긍정적인 특성을 나타내는 글자를 선택합니다.'
      },
      common_characters: {
        question: '중국어 이름에 자주 사용되는 글자는 무엇인가요?',
        answer: '중국어 이름에 자주 사용되는 글자는 덕목, 자연 요소, 긍정적인 특성과 관련된 것들입니다. 예: "明" (밝은), "华" (화려한), "伟" (위대한), "丽" (아름다운), "智" (지혜로운), "强" (강한), "雪" (눈), "海" (바다), "文" (문화적인, 세련된)'
      },
      gender_specific: {
        question: '중국어 이름은 성별에 따라 다른가요?',
        answer: '중국어 이름은 성 중립적일 수 있지만, 많은 글자들이 전통적으로 특정 성별과 연관됩니다. 아름다움, 우아함, 부드러움을 나타내는 글자는 여성 이름에 자주 사용되고("美", "婷", "静"), 힘, 야망, 리더십을 나타내는 글자는 남성 이름에 흔히 사용됩니다("强", "伟", "志").'
      },
      name_taboos: {
        question: '중국어 이름에 금기사항이 있나요?',
        answer: '네, 중국 문화에는 여러 이름 짓기 금기가 있습니다: 조상이나 존경받는 인물의 이름 피하기, 불길한 숫자나 부정적인 의미 피하기, 너무 복잡하거나 희귀한 글자 사용하지 않기, 글자를 조합했을 때 불운한 의미가 생기지 않도록 주의하기 등입니다.'
      },
      pronunciation: {
        question: '중국어 이름의 발음은 얼마나 중요한가요?',
        answer: '발음은 중국어 이름에서 매우 중요합니다. 좋은 이름은 발음했을 때 듣기 좋아야 하며, 글자들이 자연스럽게 이어져야 합니다. 성조도 고려해야 하며, 이는 이름의 전체적인 조화에 영향을 미칩니다. 또한, 중국어 사용자와 비사용자 모두가 비교적 쉽게 발음할 수 있어야 합니다.'
      },
      cultural_significance: {
        question: '중국어 이름의 문화적 의미는 무엇인가요?',
        answer: '중국어 이름은 깊은 문화적 의미를 가집니다. 전통적 가치관, 가족의 희망, 문화적 정체성을 반영합니다. 이름은 개인과 가족의 역사, 문화유산, 개인의 포부를 연결합니다. 중국 문화에서는 이름이 그 사람의 운명과 성격에 영향을 미친다고 여겨지므로, 이름 짓기는 특히 중요한 과정입니다.'
      }
    },
    hi: {
      title: 'चीनी नामों के बारे में अक्सर पूछे जाने वाले प्रश्न',
      what_makes_good_name: {
        question: 'एक अच्छे चीनी नाम की क्या विशेषताएं हैं?',
        answer: 'एक अच्छे चीनी नाम में कई महत्वपूर्ण विशेषताएं होती हैं: सकारात्मक गुणों को व्यक्त करने वाले अर्थपूर्ण अक्षर, सुमधुर उच्चारण, उचित जटिलता (आमतौर पर 2-3 अक्षर), और सांस्कृतिक प्रासंगिकता। नाम को उच्चारण और लिखने में आसान होना चाहिए, साथ ही चीनी संस्कृति में किसी भी नकारात्मक अर्थ से बचना चाहिए।'
      },
      name_structure: {
        question: 'चीनी नाम की संरचना कैसी होती है?',
        answer: 'एक चीनी नाम परंपरागत रूप से एक परिवार के नाम (उपनाम) के बाद दिए गए नाम से बना होता है। उपनाम आमतौर पर एक अक्षर का होता है, जबकि दिया गया नाम एक या दो अक्षरों का हो सकता है। उदाहरण के लिए, "李明" (ली मिंग) में, "李" उपनाम है और "明" दिया गया नाम है।'
      },
      meaning_importance: {
        question: 'चीनी नामों में अक्षरों का अर्थ कितना महत्वपूर्ण है?',
        answer: 'चीनी नामों में अक्षरों का अर्थ बेहद महत्वपूर्ण है। प्रत्येक अक्षर विशिष्ट अर्थ और सांस्कृतिक संदर्भ रखता है। माता-पिता अक्सर ऐसे अक्षर चुनते हैं जो उनके बच्चे के लिए उनकी आशाओं और इच्छाओं को दर्शाते हैं, जैसे गुण, प्राकृतिक तत्व, या ज्ञान, शक्ति, या सौंदर्य जैसे सकारात्मक गुण।'
      },
      common_characters: {
        question: 'चीनी नामों में कौन से सामान्य अक्षर प्रयोग किए जाते हैं?',
        answer: 'चीनी नामों में सामान्य अक्षर अक्सर गुणों, प्राकृतिक तत्वों, या सकारात्मक विशेषताओं से संबंधित होते हैं। उदाहरण के लिए: "明" (उज्जवल), "华" (भव्य), "伟" (महान), "丽" (सुंदर), "智" (बुद्धिमान), "强" (मजबूत), "雪" (बर्फ), "海" (समुद्र), और "文" (सांस्कृतिक, परिष्कृत)।'
      },
      gender_specific: {
        question: 'क्या चीनी नाम लिंग-विशिष्ट होते हैं?',
        answer: 'जबकि चीनी नाम लिंग-तटस्थ हो सकते हैं, कई अक्षर परंपरागत रूप से विशिष्ट लिंगों से जुड़े होते हैं। सौंदर्य, सौम्यता, या कोमलता को दर्शाने वाले अक्षर अक्सर लड़कियों के लिए प्रयोग किए जाते हैं (जैसे "美", "婷", "静"), जबकि शक्ति, महत्वाकांक्षा, या नेतृत्व को दर्शाने वाले अक्षर लड़कों के लिए सामान्य हैं (जैसे "强", "伟", "志")।'
      },
      name_taboos: {
        question: 'क्या चीनी नामकरण में कोई वर्जनाएं हैं?',
        answer: 'हाँ, चीनी संस्कृति में कई नामकरण वर्जनाएं हैं: पूर्वजों या सम्मानित व्यक्तियों के नामों से बचना, अशुभ संख्याओं या नकारात्मक अर्थों से बचना, बहुत जटिल या दुर्लभ अक्षरों का उपयोग न करना, और अक्षरों के संयोजन से कोई अनुचित अर्थ न बने इसका ध्यान रखना।'
      },
      pronunciation: {
        question: 'चीनी नाम का उच्चारण कितना महत्वपूर्ण है?',
        answer: 'उच्चारण चीनी नामों में महत्वपूर्ण है। एक अच्छे नाम का उच्चारण सुनने में सुखद होना चाहिए, अक्षरों का प्रवाह अच्छा होना चाहिए। स्वर भी महत्वपूर्ण हैं, क्योंकि वे नाम की समग्र सामंजस्यता को प्रभावित करते हैं। इसके अतिरिक्त, नाम चीनी और गैर-चीनी दोनों वक्ताओं के लिए उच्चारण में आसान होना चाहिए।'
      },
      cultural_significance: {
        question: 'चीनी नामों का सांस्कृतिक महत्व क्या है?',
        answer: 'चीनी नाम गहरा सांस्कृतिक महत्व रखते हैं। वे पारंपरिक मूल्यों, परिवार की आशाओं और सांस्कृतिक पहचान को दर्शाते हैं। नाम अक्सर व्यक्तियों को उनके परिवार के इतिहास, सांस्कृतिक विरासत और व्यक्तिगत आकांक्षाओं से जोड़ते हैं। चीनी संस्कृति में, एक नाम को व्यक्ति के भाग्य और चरित्र को प्रभावित करने वाला माना जाता है, इसलिए नामकरण प्रक्रिया विशेष रूप से महत्वपूर्ण है।'
      }
    },
    id: {
      title: 'Pertanyaan yang Sering Diajukan tentang Nama Tionghoa',
      what_makes_good_name: {
        question: 'Apa yang membuat nama Tionghoa menjadi baik?',
        answer: 'Nama Tionghoa yang baik biasanya memiliki beberapa karakteristik kunci: karakter yang bermakna yang menyampaikan sifat positif, pengucapan yang harmonis, kompleksitas yang sesuai (biasanya 2-3 karakter), dan relevansi budaya. Nama tersebut juga harus mudah diucapkan dan ditulis, sambil menghindari konotasi negatif dalam budaya Tionghoa.'
      },
      name_structure: {
        question: 'Bagaimana struktur nama Tionghoa?',
        answer: 'Nama Tionghoa secara tradisional terdiri dari nama keluarga (marga) diikuti oleh nama diri. Marga biasanya satu karakter, sementara nama diri bisa satu atau dua karakter. Misalnya, dalam nama "李明" (Li Ming), "李" adalah marga dan "明" adalah nama diri.'
      },
      meaning_importance: {
        question: 'Seberapa penting arti karakter dalam nama Tionghoa?',
        answer: 'Arti karakter sangat penting dalam nama Tionghoa. Setiap karakter membawa makna dan konotasi budaya tertentu. Orang tua sering memilih karakter yang mewakili harapan dan keinginan mereka untuk anak mereka, seperti kebajikan, unsur alam, atau kualitas positif seperti kebijaksanaan, kekuatan, atau kecantikan.'
      },
      common_characters: {
        question: 'Apa saja karakter yang umum digunakan dalam nama Tionghoa?',
        answer: 'Karakter umum dalam nama Tionghoa sering berkaitan dengan kebajikan, unsur alam, atau kualitas positif. Contohnya: "明" (cerah), "华" (megah), "伟" (hebat), "丽" (cantik), "智" (bijaksana), "强" (kuat), "雪" (niyebe), "海" (dagat), dan "文" (berbudaya, halus).'
      },
      gender_specific: {
        question: 'Apakah nama Tionghoa spesifik gender?',
        answer: 'Meskipun nama Tionghoa bisa netral gender, banyak karakter secara tradisional dikaitkan dengan gender tertentu. Karakter yang menunjukkan kecantikan, keanggunan, atau kelembutan sering digunakan untuk perempuan (seperti "美", "婷", "静"), sementara karakter yang menyiratkan kekuatan, ambisi, atau kepemimpinan umum untuk laki-laki (seperti "强", "伟", "志").'
      },
      name_taboos: {
        question: 'Apakah ada pantangan dalam penamaan Tionghoa?',
        answer: 'Ya, ada beberapa pantangan penamaan dalam budaya Tionghoa: menghindari nama leluhur atau tokoh yang dihormati, menghindari angka sial atau makna negatif, tidak menggunakan karakter yang terlalu rumit atau langka, dan memperhatikan kombinasi karakter yang mungkin menciptakan makna yang tidak diinginkan ketika dibaca bersama.'
      },
      pronunciation: {
        question: 'Seberapa penting pengucapan nama Tionghoa?',
        answer: 'Pengucapan sangat penting dalam nama Tionghoa. Nama yang baik harus memiliki suara yang menyenangkan ketika diucapkan, dengan karakter yang mengalir dengan baik bersama. Nada karakter juga harus dipertimbangkan, karena dapat mempengaruhi keharmonisan keseluruhan nama. Selain itu, nama tersebut harus relatif mudah diucapkan oleh penutur Tionghoa dan non-Tionghoa.'
      },
      cultural_significance: {
        question: 'Apa signifikansi budaya dari nama Tionghoa?',
        answer: 'Nama Tionghoa membawa signifikansi budaya yang dalam. Mereka mencerminkan nilai-nilai tradisional, harapan keluarga, dan identitas budaya. Nama sering menghubungkan individu dengan sejarah keluarga, warisan budaya, dan aspirasi pribadi mereka. Dalam budaya Tionghoa, nama dianggap mempengaruhi takdir dan karakter seseorang, membuat proses penamaan menjadi sangat penting.'
      }
    },
    tl: {
      title: 'Mga Madalas Itanong Tungkol sa mga Pangalang Tsino',
      what_makes_good_name: {
        question: 'Ano ang bumubuo sa magandang pangalang Tsino?',
        answer: 'Ang magandang pangalang Tsino ay karaniwang may ilang pangunahing katangian: mga karakterng may kahulugang nagpapahayag ng positibong katangian, magandang pagbigkas, angkop na kahirapan (karaniwang 2-3 karakter), at kaugnayan sa kultura. Ang pangalan ay dapat ding madaling bigkasin at isulat, habang iniiwasan ang anumang negatibong kahulugan sa kulturang Tsino.'
      },
      name_structure: {
        question: 'Paano binubuo ang pangalang Tsino?',
        answer: 'Ang pangalang Tsino ay tradisyonal na binubuo ng apelyido na sinusundan ng pangalan. Ang apelyido ay karaniwang isang karakter, habang ang pangalan ay maaaring isa o dalawang karakter. Halimbawa, sa pangalang "李明" (Li Ming), ang "李" ay ang apelyido at ang "明" ay ang pangalan.'
      },
      meaning_importance: {
        question: 'Gaano kahalaga ang kahulugan ng mga karakter sa mga pangalang Tsino?',
        answer: 'Ang kahulugan ng mga karakter ay napakahalagang bahagi ng mga pangalang Tsino. Bawat karakter ay may tiyak na kahulugan at kultural na kahulugan. Ang mga magulang ay kadalasang pumipili ng mga karakterng kumakatawan sa kanilang mga pag-asa at hangarin para sa kanilang anak, tulad ng mga birtud, mga elemento ng kalikasan, o positibong katangian tulad ng karunungan, lakas, o kagandahan.'
      },
      common_characters: {
        question: 'Ano ang mga karaniwang karakter na ginagamit sa mga pangalang Tsino?',
        answer: 'Ang mga karaniwang karakter sa mga pangalang Tsino ay kadalasang may kaugnayan sa mga birtud, elemento ng kalikasan, o positibong katangian. Halimbawa: "明" (maliwanag), "华" (kahanga-hanga), "伟" (dakila), "丽" (maganda), "智" (matalino), "强" (malakas), "雪" (niyebe), "海" (dagat), at "文" (kultural, pinong asal).'
      },
      gender_specific: {
        question: 'Ang mga pangalang Tsino ba ay may kaugnayan sa kasarian?',
        answer: 'Bagama\'t ang mga pangalang Tsino ay maaaring walang kasarian, maraming karakter ang tradisyonal na nauugnay sa mga tiyak na kasarian. Ang mga karakterng nagpapahiwatig ng kagandahan, kariktan, o kahinahunan ay kadalasang ginagamit para sa mga babae (tulad ng "美", "婷", "静"), habang ang mga karakterng nagpapahiwatig ng lakas, ambisyon, o pamumuno ay karaniwan para sa mga lalaki (tulad ng "强", "伟", "志").'
      },
      name_taboos: {
        question: 'May mga bawal ba sa pagpapangalan ng Tsino?',
        answer: 'Oo, may ilang bawal sa pagpapangalan sa kulturang Tsino: pag-iwas sa mga pangalan ng mga ninuno o mga iginagalang na tao, pag-iwas sa mga malas na numero o negatibong kahulugan, hindi paggamit ng mga karakterng masyadong kumplikado o bihira, at pag-iingat sa kombinasyon ng mga karakter na maaaring lumikha ng hindi magandang kahulugan kapag binasa nang magkasama.'
      },
      pronunciation: {
        question: 'Gaano kahalaga ang pagbigkas ng pangalang Tsino?',
        answer: 'Ang pagbigkas ay napakahalaga sa mga pangalang Tsino. Ang magandang pangalan ay dapat magkaroon ng magandang tunog kapag binibigkas, na may mga karakterng magandang daloy kapag pinagsama. Ang mga tono ng mga karakter ay dapat ding isaalang-alang, dahil maaari nitong maapektuhan ang pangkalahatang harmonia ng pangalan. Bukod dito, ang pangalan ay dapat medyo madaling bigkasin para sa mga nagsasalita ng Tsino at hindi Tsino.'
      },
      cultural_significance: {
        question: 'Ano ang kultural na kahalagahan ng mga pangalang Tsino?',
        answer: 'Ang mga pangalang Tsino ay may malalim na kultural na kahalagahan. Sumasalamin sila sa mga tradisyonal na pagpapahalaga, pag-asa ng pamilya, at kultural na pagkakakilanlan. Ang mga pangalan ay kadalasang kumokonekta sa mga indibidwal sa kanilang kasaysayan ng pamilya, kultural na pamana, at personal na mga hangarin. Sa kulturang Tsino, ang pangalan ay itinuturing na nakaaapekto sa kapalaran at karakter ng isang tao, kaya ang proseso ng pagpapangalan ay partikular na mahalaga.'
      }
    }
  }

  const currentTranslations = translations[locale as keyof typeof translations] || translations.en
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500">
        {currentTranslations.title}
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqSections.map((section) => (
          <div key={section} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentTranslations[section].question}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {currentTranslations[section].answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 