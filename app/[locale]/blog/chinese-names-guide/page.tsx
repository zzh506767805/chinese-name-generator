import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, Card, CTASection } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Chinese Names: Complete Guide with 200+ Popular Names and Meanings (2024)',
  description: 'Explore Chinese names, their cultural significance, and meanings. Find beautiful Chinese names for boys and girls, with pronunciation guide and character meanings.',
  keywords: 'chinese names, chinese name meanings, chinese baby names, chinese given names, chinese name characters',
}

export default function ChineseNamesGuidePage() {
  const girlNamesByCategory = {
    nature: [
      { name: '雨桐 (Yǔ Tóng)', meaning: 'Rain and paulownia', elements: ['雨 (rain)', '桐 (paulownia)'] },
      { name: '芷若 (Zhǐ Ruò)', meaning: 'Iris and grace', elements: ['芷 (iris)', '若 (like)'] },
      { name: '雪怡 (Xuě Yí)', meaning: 'Snow and elegance', elements: ['雪 (snow)', '怡 (elegant)'] },
      { name: '春华 (Chūn Huá)', meaning: 'Spring splendor', elements: ['春 (spring)', '华 (splendid)'] },
      { name: '月婷 (Yuè Tíng)', meaning: 'Moon and grace', elements: ['月 (moon)', '婷 (graceful)'] }
    ],
    elegance: [
      { name: '雅萱 (Yǎ Xuān)', meaning: 'Elegant daylily', elements: ['雅 (elegant)', '萱 (daylily)'] },
      { name: '婷玉 (Tíng Yù)', meaning: 'Grace and jade', elements: ['婷 (graceful)', '玉 (jade)'] },
      { name: '静怡 (Jìng Yí)', meaning: 'Serene and content', elements: ['静 (serene)', '怡 (content)'] },
      { name: '雅琪 (Yǎ Qí)', meaning: 'Elegant jade', elements: ['雅 (elegant)', '琪 (fine jade)'] },
      { name: '婉婷 (Wǎn Tíng)', meaning: 'Graceful and elegant', elements: ['婉 (graceful)', '婷 (elegant)'] }
    ],
    wisdom: [
      { name: '诗涵 (Shī Hán)', meaning: 'Poetic and inclusive', elements: ['诗 (poetry)', '涵 (contain)'] },
      { name: '慧琳 (Huì Lín)', meaning: 'Wise and precious', elements: ['慧 (wise)', '琳 (jade)'] },
      { name: '思颖 (Sī Yǐng)', meaning: 'Thoughtful and talented', elements: ['思 (think)', '颖 (talented)'] },
      { name: '文静 (Wén Jìng)', meaning: 'Cultured and serene', elements: ['文 (cultured)', '静 (serene)'] },
      { name: '智美 (Zhì Měi)', meaning: 'Wise and beautiful', elements: ['智 (wise)', '美 (beautiful)'] }
    ],
    virtue: [
      { name: '德馨 (Dé Xīn)', meaning: 'Virtuous and fragrant', elements: ['德 (virtue)', '馨 (fragrant)'] },
      { name: '仁美 (Rén Měi)', meaning: 'Kind and beautiful', elements: ['仁 (kindness)', '美 (beautiful)'] },
      { name: '善雅 (Shàn Yǎ)', meaning: 'Good and elegant', elements: ['善 (good)', '雅 (elegant)'] },
      { name: '恩惠 (Ēn Huì)', meaning: 'Grace and kindness', elements: ['恩 (grace)', '惠 (kindness)'] },
      { name: '和悦 (Hé Yuè)', meaning: 'Harmonious and joyful', elements: ['和 (harmony)', '悦 (joy)'] }
    ],
    artistic: [
      { name: '诗韵 (Shī Yùn)', meaning: 'Poetic rhythm', elements: ['诗 (poetry)', '韵 (rhythm)'] },
      { name: '琴雅 (Qín Yǎ)', meaning: 'Musical elegance', elements: ['琴 (music)', '雅 (elegant)'] },
      { name: '画芹 (Huà Qín)', meaning: 'Painting and nature', elements: ['画 (painting)', '芹 (celery)'] },
      { name: '歌韵 (Gē Yùn)', meaning: 'Song rhythm', elements: ['歌 (song)', '韵 (rhythm)'] },
      { name: '舞蓉 (Wǔ Róng)', meaning: 'Dance like lotus', elements: ['舞 (dance)', '蓉 (lotus)'] }
    ],
    precious: [
      { name: '玉婷 (Yù Tíng)', meaning: 'Jade and grace', elements: ['玉 (jade)', '婷 (graceful)'] },
      { name: '珍妮 (Zhēn Nī)', meaning: 'Precious and delicate', elements: ['珍 (precious)', '妮 (girl)'] },
      { name: '瑾萱 (Jǐn Xuān)', meaning: 'Precious daylily', elements: ['瑾 (precious jade)', '萱 (daylily)'] },
      { name: '琳琅 (Lín Láng)', meaning: 'Beautiful jade', elements: ['琳 (jade)', '琅 (jade)'] },
      { name: '瑶华 (Yáo Huá)', meaning: 'Precious and splendid', elements: ['瑶 (precious jade)', '华 (splendid)'] }
    ],
    happiness: [
      { name: '欢馨 (Huān Xīn)', meaning: 'Joyful and fragrant', elements: ['欢 (joy)', '馨 (fragrant)'] },
      { name: '乐怡 (Lè Yí)', meaning: 'Happy and content', elements: ['乐 (happy)', '怡 (content)'] },
      { name: '悦心 (Yuè Xīn)', meaning: 'Delighted heart', elements: ['悦 (delighted)', '心 (heart)'] },
      { name: '笑颜 (Xiào Yán)', meaning: 'Smiling face', elements: ['笑 (smile)', '颜 (face)'] },
      { name: '欣然 (Xīn Rán)', meaning: 'Happy and natural', elements: ['欣 (happy)', '然 (natural)'] }
    ],
    modern: [
      { name: '安娜 (Ān Nà)', meaning: 'Peaceful and elegant', elements: ['安 (peace)', '娜 (elegant)'] },
      { name: '美琪 (Měi Qí)', meaning: 'Beautiful jade', elements: ['美 (beautiful)', '琪 (jade)'] },
      { name: '凯瑞 (Kǎi Ruì)', meaning: 'Victorious and lucky', elements: ['凯 (victory)', '瑞 (lucky)'] },
      { name: '莉莉 (Lì Lì)', meaning: 'Jasmine flower', elements: ['莉 (jasmine)', '莉 (jasmine)'] },
      { name: '佳雯 (Jiā Wén)', meaning: 'Beautiful and gentle', elements: ['佳 (beautiful)', '雯 (gentle clouds)'] }
    ],
    flowers: [
      { name: '芷若 (Zhǐ Ruò)', meaning: 'Angelica and graceful', elements: ['芷 (angelica)', '若 (graceful)'] },
      { name: '兰心 (Lán Xīn)', meaning: 'Orchid heart', elements: ['兰 (orchid)', '心 (heart)'] },
      { name: '荷韵 (Hé Yùn)', meaning: 'Lotus rhythm', elements: ['荷 (lotus)', '韵 (rhythm)'] },
      { name: '菡萏 (Hàn Dàn)', meaning: 'Lotus flower', elements: ['菡 (lotus)', '萏 (lotus)'] },
      { name: '茉莉 (Mò Lì)', meaning: 'Jasmine', elements: ['茉 (jasmine)', '莉 (jasmine)'] }
    ],
    gentle: [
      { name: '温婉 (Wēn Wǎn)', meaning: 'Gentle and graceful', elements: ['温 (gentle)', '婉 (graceful)'] },
      { name: '柔雅 (Róu Yǎ)', meaning: 'Gentle and elegant', elements: ['柔 (gentle)', '雅 (elegant)'] },
      { name: '婷婷 (Tíng Tíng)', meaning: 'Graceful and delicate', elements: ['婷 (graceful)', '婷 (graceful)'] },
      { name: '静怡 (Jìng Yí)', meaning: 'Quiet and content', elements: ['静 (quiet)', '怡 (content)'] },
      { name: '恬美 (Tián Měi)', meaning: 'Serene and beautiful', elements: ['恬 (serene)', '美 (beautiful)'] }
    ],
    light: [
      { name: '晨曦 (Chén Xī)', meaning: 'Morning light', elements: ['晨 (morning)', '曦 (light)'] },
      { name: '曙光 (Shǔ Guāng)', meaning: 'Dawn light', elements: ['曙 (dawn)', '光 (light)'] },
      { name: '旭彤 (Xù Tóng)', meaning: 'Rising sun red', elements: ['旭 (rising sun)', '彤 (red)'] },
      { name: '熹微 (Xī Wēi)', meaning: 'Dawn light', elements: ['熹 (bright)', '微 (subtle)'] },
      { name: '晓月 (Xiǎo Yuè)', meaning: 'Morning moon', elements: ['晓 (dawn)', '月 (moon)'] }
    ],
    noble: [
      { name: '雅琴 (Yǎ Qín)', meaning: 'Elegant music', elements: ['雅 (elegant)', '琴 (music)'] },
      { name: '清华 (Qīng Huá)', meaning: 'Pure and splendid', elements: ['清 (pure)', '华 (splendid)'] },
      { name: '淑慧 (Shū Huì)', meaning: 'Virtuous and wise', elements: ['淑 (virtuous)', '慧 (wise)'] },
      { name: '芊贵 (Qiān Guì)', meaning: 'Delicate and noble', elements: ['芊 (delicate)', '贵 (noble)'] },
      { name: '雍容 (Yōng Róng)', meaning: 'Dignified and graceful', elements: ['雍 (dignified)', '容 (appearance)'] }
    ],
    music: [
      { name: '乐瑶 (Lè Yáo)', meaning: 'Music and jade', elements: ['乐 (music)', '瑶 (jade)'] },
      { name: '歌韵 (Gē Yùn)', meaning: 'Song and rhythm', elements: ['歌 (song)', '韵 (rhythm)'] },
      { name: '琴心 (Qín Xīn)', meaning: 'Musical heart', elements: ['琴 (musical instrument)', '心 (heart)'] },
      { name: '音悦 (Yīn Yuè)', meaning: 'Sound and joy', elements: ['音 (sound)', '悦 (joy)'] },
      { name: '律韵 (Lǜ Yùn)', meaning: 'Melody and rhythm', elements: ['律 (melody)', '韵 (rhythm)'] }
    ],
    wisdom_extra: [
      { name: '慧颖 (Huì Yǐng)', meaning: 'Wise and talented', elements: ['慧 (wise)', '颖 (talented)'] },
      { name: '睿智 (Ruì Zhì)', meaning: 'Wise and intelligent', elements: ['睿 (wise)', '智 (intelligent)'] },
      { name: '聪颖 (Cōng Yǐng)', meaning: 'Clever and talented', elements: ['聪 (clever)', '颖 (talented)'] },
      { name: '敏慧 (Mǐn Huì)', meaning: 'Quick and wise', elements: ['敏 (quick)', '慧 (wise)'] },
      { name: '哲雅 (Zhé Yǎ)', meaning: 'Philosophical and elegant', elements: ['哲 (philosophical)', '雅 (elegant)'] }
    ],
    auspicious: [
      { name: '瑞雪 (Ruì Xuě)', meaning: 'Lucky snow', elements: ['瑞 (lucky)', '雪 (snow)'] },
      { name: '祥云 (Xiáng Yún)', meaning: 'Auspicious cloud', elements: ['祥 (auspicious)', '云 (cloud)'] },
      { name: '吉星 (Jí Xīng)', meaning: 'Lucky star', elements: ['吉 (lucky)', '星 (star)'] },
      { name: '福悦 (Fú Yuè)', meaning: 'Blessed and joyful', elements: ['福 (blessing)', '悦 (joy)'] },
      { name: '安泰 (Ān Tài)', meaning: 'Peace and security', elements: ['安 (peace)', '泰 (security)'] }
    ],
    time: [
      { name: '岁华 (Suì Huá)', meaning: 'Years and splendor', elements: ['岁 (year)', '华 (splendid)'] },
      { name: '时韵 (Shí Yùn)', meaning: 'Time and rhythm', elements: ['时 (time)', '韵 (rhythm)'] },
      { name: '春晖 (Chūn Huī)', meaning: 'Spring sunshine', elements: ['春 (spring)', '晖 (sunshine)'] },
      { name: '夏莲 (Xià Lián)', meaning: 'Summer lotus', elements: ['夏 (summer)', '莲 (lotus)'] },
      { name: '秋月 (Qiū Yuè)', meaning: 'Autumn moon', elements: ['秋 (autumn)', '月 (moon)'] }
    ],
    literature: [
      { name: '书瑶 (Shū Yáo)', meaning: 'Literary jade', elements: ['书 (book)', '瑶 (jade)'] },
      { name: '墨香 (Mò Xiāng)', meaning: 'Ink fragrance', elements: ['墨 (ink)', '香 (fragrant)'] },
      { name: '诗韵 (Shī Yùn)', meaning: 'Poetic rhythm', elements: ['诗 (poetry)', '韵 (rhythm)'] },
      { name: '文雅 (Wén Yǎ)', meaning: 'Literary and elegant', elements: ['文 (literature)', '雅 (elegant)'] },
      { name: '翰墨 (Hàn Mò)', meaning: 'Writing and ink', elements: ['翰 (writing)', '墨 (ink)'] }
    ],
    character_girl: [
      { name: '德馨 (Dé Xīn)', meaning: 'Virtuous and fragrant', elements: ['德 (virtue)', '馨 (fragrant)'] },
      { name: '慈爱 (Cí Ài)', meaning: 'Kind and loving', elements: ['慈 (kind)', '爱 (love)'] },
      { name: '贤淑 (Xián Shū)', meaning: 'Virtuous and gentle', elements: ['贤 (virtuous)', '淑 (gentle)'] },
      { name: '恭敬 (Gōng Jìng)', meaning: 'Respectful and reverent', elements: ['恭 (respectful)', '敬 (reverent)'] },
      { name: '谦和 (Qiān Hé)', meaning: 'Modest and harmonious', elements: ['谦 (modest)', '和 (harmonious)'] }
    ],
    tranquil: [
      { name: '宁馨 (Níng Xīn)', meaning: 'Peaceful and fragrant', elements: ['宁 (peaceful)', '馨 (fragrant)'] },
      { name: '安然 (Ān Rán)', meaning: 'Peaceful and natural', elements: ['安 (peaceful)', '然 (natural)'] },
      { name: '静雅 (Jìng Yǎ)', meaning: 'Quiet and elegant', elements: ['静 (quiet)', '雅 (elegant)'] },
      { name: '和悦 (Hé Yuè)', meaning: 'Harmonious and joyful', elements: ['和 (harmonious)', '悦 (joyful)'] },
      { name: '恬静 (Tián Jìng)', meaning: 'Serene and quiet', elements: ['恬 (serene)', '静 (quiet)'] }
    ],
    demeanor: [
      { name: '仪秀 (Yí Xiù)', meaning: 'Graceful and elegant', elements: ['仪 (graceful)', '秀 (elegant)'] },
      { name: '风华 (Fēng Huá)', meaning: 'Graceful and splendid', elements: ['风 (style)', '华 (splendid)'] },
      { name: '雅韵 (Yǎ Yùn)', meaning: 'Elegant rhythm', elements: ['雅 (elegant)', '韵 (rhythm)'] },
      { name: '姿颖 (Zī Yǐng)', meaning: 'Graceful and talented', elements: ['姿 (posture)', '颖 (talented)'] },
      { name: '容华 (Róng Huá)', meaning: 'Beautiful and splendid', elements: ['容 (appearance)', '华 (splendid)'] }
    ]
  }

  const boyNamesByCategory = {
    strength: [
      { name: '浩然 (Hào Rán)', meaning: 'Vastly righteous', elements: ['浩 (vast)', '然 (correct)'] },
      { name: '强国 (Qiáng Guó)', meaning: 'Strong country', elements: ['强 (strong)', '国 (country)'] },
      { name: '伟力 (Wěi Lì)', meaning: 'Great strength', elements: ['伟 (great)', '力 (strength)'] },
      { name: '刚毅 (Gāng Yì)', meaning: 'Strong and resolute', elements: ['刚 (strong)', '毅 (resolute)'] },
      { name: '勇军 (Yǒng Jūn)', meaning: 'Brave army', elements: ['勇 (brave)', '军 (army)'] }
    ],
    wisdom: [
      { name: '智渊 (Zhì Yuān)', meaning: 'Deep wisdom', elements: ['智 (wisdom)', '渊 (deep)'] },
      { name: '博文 (Bó Wén)', meaning: 'Extensive knowledge', elements: ['博 (extensive)', '文 (culture)'] },
      { name: '哲瀚 (Zhé Hàn)', meaning: 'Philosophical and vast', elements: ['哲 (philosophy)', '瀚 (vast)'] },
      { name: '思聪 (Sī Cōng)', meaning: 'Thoughtful and intelligent', elements: ['思 (think)', '聪 (intelligent)'] },
      { name: '睿智 (Ruì Zhì)', meaning: 'Wise and intelligent', elements: ['睿 (wise)', '智 (intelligent)'] }
    ],
    ambition: [
      { name: '志远 (Zhì Yuǎn)', meaning: 'Ambitious and far-reaching', elements: ['志 (ambition)', '远 (far)'] },
      { name: '宏图 (Hóng Tú)', meaning: 'Grand plan', elements: ['宏 (grand)', '图 (plan)'] },
      { name: '展鹏 (Zhǎn Péng)', meaning: 'Soaring roc', elements: ['展 (spread)', '鹏 (roc)'] },
      { name: '腾飞 (Téng Fēi)', meaning: 'Soaring high', elements: ['腾 (rise)', '飞 (fly)'] },
      { name: '鸿志 (Hóng Zhì)', meaning: 'Great ambition', elements: ['鸿 (great)', '志 (ambition)'] }
    ],
    leadership: [
      { name: '治国 (Zhì Guó)', meaning: 'Govern the country', elements: ['治 (govern)', '国 (country)'] },
      { name: '领军 (Lǐng Jūn)', meaning: 'Lead the army', elements: ['领 (lead)', '军 (army)'] },
      { name: '统宇 (Tǒng Yǔ)', meaning: 'Unite the universe', elements: ['统 (unite)', '宇 (universe)'] },
      { name: '掌权 (Zhǎng Quán)', meaning: 'Hold authority', elements: ['掌 (hold)', '权 (power)'] },
      { name: '君威 (Jūn Wēi)', meaning: 'Royal authority', elements: ['君 (ruler)', '威 (power)'] }
    ],
    cultural: [
      { name: '文轩 (Wén Xuān)', meaning: 'Literary elegance', elements: ['文 (literature)', '轩 (elegant)'] },
      { name: '学海 (Xué Hǎi)', meaning: 'Sea of learning', elements: ['学 (study)', '海 (sea)'] },
      { name: '书涵 (Shū Hán)', meaning: 'Book collection', elements: ['书 (book)', '涵 (contain)'] },
      { name: '诗礼 (Shī Lǐ)', meaning: 'Poetry and etiquette', elements: ['诗 (poetry)', '礼 (etiquette)'] },
      { name: '经纶 (Jīng Lún)', meaning: 'Classic literature', elements: ['经 (classic)', '纶 (order)'] }
    ],
    nature: [
      { name: '山河 (Shān Hé)', meaning: 'Mountains and rivers', elements: ['山 (mountain)', '河 (river)'] },
      { name: '海川 (Hǎi Chuān)', meaning: 'Sea and river', elements: ['海 (sea)', '川 (river)'] },
      { name: '云天 (Yún Tiān)', meaning: 'Clouds and sky', elements: ['云 (cloud)', '天 (sky)'] },
      { name: '松柏 (Sōng Bǎi)', meaning: 'Pine and cypress', elements: ['松 (pine)', '柏 (cypress)'] },
      { name: '日月 (Rì Yuè)', meaning: 'Sun and moon', elements: ['日 (sun)', '月 (moon)'] }
    ],
    prosperity: [
      { name: '富贵 (Fù Guì)', meaning: 'Wealth and nobility', elements: ['富 (wealth)', '贵 (noble)'] },
      { name: '荣华 (Róng Huá)', meaning: 'Glory and splendor', elements: ['荣 (glory)', '华 (splendid)'] },
      { name: '兴盛 (Xīng Shèng)', meaning: 'Prosperous and flourishing', elements: ['兴 (prosper)', '盛 (flourish)'] },
      { name: '昌隆 (Chāng Lóng)', meaning: 'Prosperous and rising', elements: ['昌 (prosperous)', '隆 (rising)'] },
      { name: '瑞祥 (Ruì Xiáng)', meaning: 'Lucky and auspicious', elements: ['瑞 (lucky)', '祥 (auspicious)'] }
    ],
    modern: [
      { name: '凯文 (Kǎi Wén)', meaning: 'Victorious and cultured', elements: ['凯 (victory)', '文 (culture)'] },
      { name: '杰森 (Jié Sēn)', meaning: 'Outstanding and spiritual', elements: ['杰 (outstanding)', '森 (forest)'] },
      { name: '安东 (Ān Dōng)', meaning: 'Peaceful east', elements: ['安 (peace)', '东 (east)'] },
      { name: '明亮 (Míng Liàng)', meaning: 'Bright and clear', elements: ['明 (bright)', '亮 (clear)'] },
      { name: '俊杰 (Jùn Jié)', meaning: 'Talented and outstanding', elements: ['俊 (talented)', '杰 (outstanding)'] }
    ],
    courage: [
      { name: '勇毅 (Yǒng Yì)', meaning: 'Brave and resolute', elements: ['勇 (brave)', '毅 (resolute)'] },
      { name: '刚强 (Gāng Qiáng)', meaning: 'Strong and powerful', elements: ['刚 (strong)', '强 (powerful)'] },
      { name: '豪杰 (Háo Jié)', meaning: 'Heroic and outstanding', elements: ['豪 (heroic)', '杰 (outstanding)'] },
      { name: '威武 (Wēi Wǔ)', meaning: 'Mighty and martial', elements: ['威 (mighty)', '武 (martial)'] },
      { name: '壮志 (Zhuàng Zhì)', meaning: 'Strong ambition', elements: ['壮 (strong)', '志 (ambition)'] }
    ],
    justice: [
      { name: '正义 (Zhèng Yì)', meaning: 'Justice and righteousness', elements: ['正 (righteous)', '义 (justice)'] },
      { name: '德明 (Dé Míng)', meaning: 'Virtuous and bright', elements: ['德 (virtue)', '明 (bright)'] },
      { name: '仁德 (Rén Dé)', meaning: 'Benevolent and virtuous', elements: ['仁 (benevolent)', '德 (virtue)'] },
      { name: '守信 (Shǒu Xìn)', meaning: 'Keep faith', elements: ['守 (keep)', '信 (faith)'] },
      { name: '诚正 (Chéng Zhèng)', meaning: 'Honest and upright', elements: ['诚 (honest)', '正 (upright)'] }
    ],
    talent: [
      { name: '才俊 (Cái Jùn)', meaning: 'Talented and capable', elements: ['才 (talent)', '俊 (capable)'] },
      { name: '艺博 (Yì Bó)', meaning: 'Artistic and extensive', elements: ['艺 (art)', '博 (extensive)'] },
      { name: '智渊 (Zhì Yuān)', meaning: 'Wise and deep', elements: ['智 (wisdom)', '渊 (deep)'] },
      { name: '学贤 (Xué Xián)', meaning: 'Learned and virtuous', elements: ['学 (learn)', '贤 (virtuous)'] },
      { name: '才锋 (Cái Fēng)', meaning: 'Talented and sharp', elements: ['才 (talent)', '锋 (sharp)'] }
    ],
    character: [
      { name: '坚毅 (Jiān Yì)', meaning: 'Firm and persevering', elements: ['坚 (firm)', '毅 (persevering)'] },
      { name: '志坚 (Zhì Jiān)', meaning: 'Resolute will', elements: ['志 (will)', '坚 (firm)'] },
      { name: '恒心 (Héng Xīn)', meaning: 'Persevering heart', elements: ['恒 (constant)', '心 (heart)'] },
      { name: '信义 (Xìn Yì)', meaning: 'Faithful and righteous', elements: ['信 (faith)', '义 (righteousness)'] },
      { name: '忠厚 (Zhōng Hòu)', meaning: 'Loyal and honest', elements: ['忠 (loyal)', '厚 (honest)'] }
    ],
    universe: [
      { name: '天宇 (Tiān Yǔ)', meaning: 'Sky and universe', elements: ['天 (sky)', '宇 (universe)'] },
      { name: '星辰 (Xīng Chén)', meaning: 'Stars and constellations', elements: ['星 (star)', '辰 (celestial body)'] },
      { name: '山川 (Shān Chuān)', meaning: 'Mountains and rivers', elements: ['山 (mountain)', '川 (river)'] },
      { name: '海洋 (Hǎi Yáng)', meaning: 'Ocean and sea', elements: ['海 (sea)', '洋 (ocean)'] },
      { name: '云霄 (Yún Xiāo)', meaning: 'Clouds and sky', elements: ['云 (cloud)', '霄 (sky)'] }
    ],
    ambition_extra: [
      { name: '志远 (Zhì Yuǎn)', meaning: 'Ambitious and far-reaching', elements: ['志 (ambition)', '远 (far)'] },
      { name: '展鹏 (Zhǎn Péng)', meaning: 'Spreading wings', elements: ['展 (spread)', '鹏 (roc)'] },
      { name: '腾飞 (Téng Fēi)', meaning: 'Soaring high', elements: ['腾 (rise)', '飞 (fly)'] },
      { name: '鸿志 (Hóng Zhì)', meaning: 'Great ambition', elements: ['鸿 (great)', '志 (ambition)'] },
      { name: '远图 (Yuǎn Tú)', meaning: 'Far-reaching plans', elements: ['远 (far)', '图 (plan)'] }
    ],
    fortune: [
      { name: '福德 (Fú Dé)', meaning: 'Fortune and virtue', elements: ['福 (fortune)', '德 (virtue)'] },
      { name: '瑞祥 (Ruì Xiáng)', meaning: 'Lucky and auspicious', elements: ['瑞 (lucky)', '祥 (auspicious)'] },
      { name: '吉庆 (Jí Qìng)', meaning: 'Auspicious celebration', elements: ['吉 (auspicious)', '庆 (celebrate)'] },
      { name: '祥和 (Xiáng Hé)', meaning: 'Auspicious and harmonious', elements: ['祥 (auspicious)', '和 (harmony)'] },
      { name: '泰安 (Tài Ān)', meaning: 'Great peace', elements: ['泰 (great)', '安 (peace)'] }
    ],
    virtue: [
      { name: '修德 (Xiū Dé)', meaning: 'Cultivate virtue', elements: ['修 (cultivate)', '德 (virtue)'] },
      { name: '仁义 (Rén Yì)', meaning: 'Benevolent and righteous', elements: ['仁 (benevolent)', '义 (righteous)'] },
      { name: '礼和 (Lǐ Hé)', meaning: 'Courteous and harmonious', elements: ['礼 (courtesy)', '和 (harmony)'] },
      { name: '德馨 (Dé Xīn)', meaning: 'Virtuous and fragrant', elements: ['德 (virtue)', '馨 (fragrant)'] },
      { name: '善行 (Shàn Xíng)', meaning: 'Good conduct', elements: ['善 (good)', '行 (conduct)'] }
    ],
    classics: [
      { name: '经纶 (Jīng Lún)', meaning: 'Classic literature', elements: ['经 (classic)', '纶 (order)'] },
      { name: '文韬 (Wén Tāo)', meaning: 'Literary strategy', elements: ['文 (literature)', '韬 (strategy)'] },
      { name: '书达 (Shū Dá)', meaning: 'Literary achievement', elements: ['书 (book)', '达 (achieve)'] },
      { name: '诗礼 (Shī Lǐ)', meaning: 'Poetry and etiquette', elements: ['诗 (poetry)', '礼 (etiquette)'] },
      { name: '学海 (Xué Hǎi)', meaning: 'Sea of learning', elements: ['学 (learn)', '海 (sea)'] }
    ],
    patriotic: [
      { name: '国华 (Guó Huá)', meaning: 'National glory', elements: ['国 (nation)', '华 (glory)'] },
      { name: '家和 (Jiā Hé)', meaning: 'Family harmony', elements: ['家 (family)', '和 (harmony)'] },
      { name: '民安 (Mín Ān)', meaning: 'People\'s peace', elements: ['民 (people)', '安 (peace)'] },
      { name: '邦瑞 (Bāng Ruì)', meaning: 'National fortune', elements: ['邦 (nation)', '瑞 (fortune)'] },
      { name: '泽民 (Zé Mín)', meaning: 'Benefit people', elements: ['泽 (benefit)', '民 (people)'] }
    ],
    dignified: [
      { name: '轩昂 (Xuān Áng)', meaning: 'Dignified and noble', elements: ['轩 (dignified)', '昂 (noble)'] },
      { name: '气宇 (Qì Yǔ)', meaning: 'Dignified bearing', elements: ['气 (spirit)', '宇 (universe)'] },
      { name: '昂然 (Áng Rán)', meaning: 'Noble and natural', elements: ['昂 (noble)', '然 (natural)'] },
      { name: '俊朗 (Jùn Lǎng)', meaning: 'Handsome and bright', elements: ['俊 (handsome)', '朗 (bright)'] },
      { name: '风华 (Fēng Huá)', meaning: 'Graceful and splendid', elements: ['风 (style)', '华 (splendid)'] }
    ],
    heroic: [
      { name: '英豪 (Yīng Háo)', meaning: 'Hero and brave', elements: ['英 (hero)', '豪 (brave)'] },
      { name: '飒爽 (Sà Shuǎng)', meaning: 'Heroic and handsome', elements: ['飒 (heroic)', '爽 (handsome)'] },
      { name: '雄姿 (Xióng Zī)', meaning: 'Heroic posture', elements: ['雄 (heroic)', '姿 (posture)'] },
      { name: '英朗 (Yīng Lǎng)', meaning: 'Hero and bright', elements: ['英 (hero)', '朗 (bright)'] },
      { name: '豪迈 (Háo Mài)', meaning: 'Bold and unconstrained', elements: ['豪 (bold)', '迈 (stride)'] }
    ]
  }

  const relatedArticles = [
    {
      href: '/blog/chinese-names-for-boys',
      title: 'Chinese Names for Boys'
    },
    {
      href: '/blog/chinese-names-for-girls',
      title: 'Chinese Names for Girls'
    },
    {
      href: '/blog/chinese-last-names-guide',
      title: 'Guide to Chinese Last Names'
    }
  ]

  return (
    <BlogArticle
      title="Chinese Names: Complete Guide with 200+ Popular Names"
      description="Discover the beauty and meaning of Chinese names, from traditional naming principles to modern trends, with a comprehensive collection of popular names for boys and girls."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Understanding Chinese Names">
        <Card className="bg-amber-50">
          <h3 className="text-lg font-semibold mb-3">Name Structure</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>Family name (姓) comes first - usually one character</li>
            <li>Given name (名) follows - one or two characters</li>
            <li>Full name typically has 2-3 characters total</li>
            <li>Women keep their family names after marriage</li>
          </ul>
        </Card>
      </ContentSection>

      <ContentSection title="Girl Names by Theme">
        <h3 className="text-xl font-semibold mb-4">Nature-Inspired Names</h3>
        <CardGrid>
          {girlNamesByCategory.nature.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Elegance & Grace</h3>
        <CardGrid>
          {girlNamesByCategory.elegance.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Wisdom & Intelligence</h3>
        <CardGrid>
          {girlNamesByCategory.wisdom.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Virtue & Kindness</h3>
        <CardGrid>
          {girlNamesByCategory.virtue.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Artistic & Cultural</h3>
        <CardGrid>
          {girlNamesByCategory.artistic.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Precious & Valuable</h3>
        <CardGrid>
          {girlNamesByCategory.precious.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Joy & Happiness</h3>
        <CardGrid>
          {girlNamesByCategory.happiness.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Modern & International</h3>
        <CardGrid>
          {girlNamesByCategory.modern.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Flowers & Plants</h3>
        <CardGrid>
          {girlNamesByCategory.flowers.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Gentle & Beautiful</h3>
        <CardGrid>
          {girlNamesByCategory.gentle.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Light & Hope</h3>
        <CardGrid>
          {girlNamesByCategory.light.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Noble & Elegant</h3>
        <CardGrid>
          {girlNamesByCategory.noble.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Music & Arts</h3>
        <CardGrid>
          {girlNamesByCategory.music.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Wisdom & Intelligence</h3>
        <CardGrid>
          {girlNamesByCategory.wisdom.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Auspicious & Lucky</h3>
        <CardGrid>
          {girlNamesByCategory.auspicious.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Time & Seasons</h3>
        <CardGrid>
          {girlNamesByCategory.time.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Literature & Writing</h3>
        <CardGrid>
          {girlNamesByCategory.literature.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Character & Virtue</h3>
        <CardGrid>
          {girlNamesByCategory.character_girl.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Tranquil & Peaceful</h3>
        <CardGrid>
          {girlNamesByCategory.tranquil.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Graceful Demeanor</h3>
        <CardGrid>
          {girlNamesByCategory.demeanor.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>
      </ContentSection>

      <ContentSection title="Boy Names by Theme">
        <h3 className="text-xl font-semibold mb-4">Strength & Power</h3>
        <CardGrid>
          {boyNamesByCategory.strength.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Wisdom & Learning</h3>
        <CardGrid>
          {boyNamesByCategory.wisdom.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Ambition & Achievement</h3>
        <CardGrid>
          {boyNamesByCategory.ambition.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Leadership & Authority</h3>
        <CardGrid>
          {boyNamesByCategory.leadership.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Cultural & Literary</h3>
        <CardGrid>
          {boyNamesByCategory.cultural.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Nature & Elements</h3>
        <CardGrid>
          {boyNamesByCategory.nature.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Prosperity & Success</h3>
        <CardGrid>
          {boyNamesByCategory.prosperity.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Modern & International</h3>
        <CardGrid>
          {boyNamesByCategory.modern.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Courage & Bravery</h3>
        <CardGrid>
          {boyNamesByCategory.courage.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Justice & Virtue</h3>
        <CardGrid>
          {boyNamesByCategory.justice.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Talent & Wisdom</h3>
        <CardGrid>
          {boyNamesByCategory.talent.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Character & Integrity</h3>
        <CardGrid>
          {boyNamesByCategory.character.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Universe & Nature</h3>
        <CardGrid>
          {boyNamesByCategory.universe.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Ambition & Goals</h3>
        <CardGrid>
          {boyNamesByCategory.ambition.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Fortune & Luck</h3>
        <CardGrid>
          {boyNamesByCategory.fortune.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Virtue & Conduct</h3>
        <CardGrid>
          {boyNamesByCategory.virtue.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Classical Literature</h3>
        <CardGrid>
          {boyNamesByCategory.classics.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Patriotic & Family</h3>
        <CardGrid>
          {boyNamesByCategory.patriotic.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Dignified & Noble</h3>
        <CardGrid>
          {boyNamesByCategory.dignified.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>

        <h3 className="text-xl font-semibold mb-4 mt-8">Heroic & Brave</h3>
        <CardGrid>
          {boyNamesByCategory.heroic.map(name => (
            <Card key={name.name}>
              <h3 className="text-lg font-semibold mb-2">{name.name}</h3>
              <p className="text-gray-600 mb-1">Meaning: {name.meaning}</p>
              <div className="text-gray-500">
                Elements: {name.elements.join(', ')}
              </div>
            </Card>
          ))}
        </CardGrid>
      </ContentSection>

      <ContentSection title="Common Characters for Girls">
        <CardGrid>
          <Card className="bg-pink-50">
            <h3 className="text-lg font-semibold mb-3">Natural Beauty</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>花 (huā) - flower</li>
              <li>月 (yuè) - moon</li>
              <li>雪 (xuě) - snow</li>
              <li>春 (chūn) - spring</li>
              <li>兰 (lán) - orchid</li>
            </ul>
          </Card>
          <Card className="bg-rose-50">
            <h3 className="text-lg font-semibold mb-3">Virtues & Qualities</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>雅 (yǎ) - elegance</li>
              <li>婷 (tíng) - grace</li>
              <li>静 (jìng) - serenity</li>
              <li>慧 (huì) - wisdom</li>
              <li>美 (měi) - beauty</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Common Characters for Boys">
        <CardGrid>
          <Card className="bg-blue-50">
            <h3 className="text-lg font-semibold mb-3">Strength & Power</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>强 (qiáng) - strong</li>
              <li>勇 (yǒng) - brave</li>
              <li>威 (wēi) - powerful</li>
              <li>龙 (lóng) - dragon</li>
              <li>军 (jūn) - army</li>
            </ul>
          </Card>
          <Card className="bg-green-50">
            <h3 className="text-lg font-semibold mb-3">Wisdom & Learning</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>智 (zhì) - wisdom</li>
              <li>博 (bó) - extensive</li>
              <li>文 (wén) - culture</li>
              <li>学 (xué) - study</li>
              <li>思 (sī) - think</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Naming Principles">
        <Card className="bg-yellow-50">
          <h3 className="text-lg font-semibold mb-3">Key Considerations</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>Sound harmony and tone patterns</li>
            <li>Character stroke count balance</li>
            <li>Meaning associations and combinations</li>
            <li>Family traditions and generation names</li>
            <li>Modern practicality and international use</li>
          </ul>
        </Card>
      </ContentSection>

      <ContentSection title="Modern Trends">
        <CardGrid>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Contemporary Preferences</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Unique character combinations</li>
              <li>Gender-neutral names</li>
              <li>Easy international pronunciation</li>
              <li>Positive modern associations</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Traditional Elements</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Cultural significance</li>
              <li>Family heritage</li>
              <li>Auspicious meanings</li>
              <li>Classical references</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <CTASection
        title="Find Your Perfect Chinese Name"
        description="Ready to discover your ideal Chinese name? Use our AI-powered name generator to create a meaningful name that reflects your personality:"
        buttonText="Generate Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
}