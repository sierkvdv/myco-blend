'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const studies = [
  {
    mushroom: "Lion's Mane",
    mushroomKo: "노루궁뎅이버섯",
    mushroomJa: "ライオンズメイン",
    compound: "Hericenones / Erinacines",
    compoundNote: { ko: "NGF(신경성장인자) 합성 관련", en: "Related to NGF synthesis", ja: "NGF合成との関連" },
    studies: [
      {
        title: "Improving effects of the mushroom Yamabushitake on mild cognitive impairment",
        authors: "Mori K. et al.",
        journal: "Phytotherapy Research",
        year: 2009,
        institution: "Ishinomaki Senshu University, Japan",
        what: { ko: "경도인지장애를 가진 50-80세 성인 30명을 대상으로 16주간 이중맹검 무작위 대조 연구. MMSE 척도로 인지 기능을 측정.", en: "Double-blind RCT with 30 adults aged 50-80 with mild cognitive impairment over 16 weeks. Cognitive function measured via MMSE scale.", ja: "軽度認知障害を持つ50-80歳の成人30名を対象に16週間の二重盲検RCT。MMSE尺度で認知機能を測定。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/18844328/"
      },
      {
        title: "Nerve growth factor-inducing activity of Hericium erinaceus in 1321N1 human astrocytoma cells",
        authors: "Kawagishi H. et al.",
        journal: "Biological & Pharmaceutical Bulletin",
        year: 2008,
        institution: "Shizuoka University, Japan",
        what: { ko: "헤리세논이 인간 성상세포 배양에서 NGF 유도 활성을 보이는지 in vitro 연구.", en: "In vitro study examining whether hericenones show NGF-inducing activity in human astrocytoma cell culture.", ja: "ヘリセノンがヒト星状細胞培養においてNGF誘導活性を示すかを調べたin vitro研究。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/18379070/"
      }
    ]
  },
  {
    mushroom: "Cordyceps",
    mushroomKo: "동충하초",
    mushroomJa: "コルディセプス",
    compound: "Cordycepin / Adenosine",
    compoundNote: { ko: "ATP 대사 및 산소 이용 관련", en: "Related to ATP metabolism & oxygen utilization", ja: "ATP代謝・酸素利用との関連" },
    studies: [
      {
        title: "Cordyceps militaris improves tolerance to high-intensity exercise after acute and chronic supplementation",
        authors: "Hirsch K.R. et al.",
        journal: "Journal of Dietary Supplements",
        year: 2017,
        institution: "North Carolina State University, USA",
        what: { ko: "건강한 성인 28명을 대상으로 동충하초 보충 전후 최대산소섭취량(VO2max)과 환기역치를 측정.", en: "Measured VO2max and ventilatory threshold in 28 healthy adults before and after Cordyceps supplementation.", ja: "健康な成人28名を対象にコルディセプス補充の前後でVO2maxと換気閾値を測定。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/27736052/"
      },
      {
        title: "Effect of Cs-4 (Cordyceps sinensis) on exercise performance in healthy older subjects",
        authors: "Chen S. et al.",
        journal: "Journal of Alternative and Complementary Medicine",
        year: 2010,
        institution: "Oregon Health & Science University, USA",
        what: { ko: "50-75세 건강한 성인 20명을 대상으로 12주 무작위 대조 연구. 대사등가물(MET) 및 VO2 peak 측정.", en: "12-week RCT with 20 healthy adults aged 50-75. Measured metabolic equivalents (MET) and VO2 peak.", ja: "50-75歳の健康な成人20名を対象とした12週間RCT。代謝当量とVO2ピークを測定。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/20804368/"
      }
    ]
  },
  {
    mushroom: "Reishi",
    mushroomKo: "영지버섯",
    mushroomJa: "霊芝",
    compound: "Triterpenes / β-Glucans",
    compoundNote: { ko: "면역 조절 관련 다당류 연구", en: "Polysaccharide research related to immune modulation", ja: "免疫調節に関連する多糖類研究" },
    studies: [
      {
        title: "A randomized, double-blind and placebo-controlled study of a Ganoderma lucidum polysaccharide extract in neurasthenia",
        authors: "Tang W. et al.",
        journal: "Journal of Medicinal Food",
        year: 2005,
        institution: "University of Hong Kong",
        what: { ko: "신경쇠약 증상이 있는 132명을 대상으로 8주간 이중맹검 위약대조 연구. 피로 및 삶의 질 지표 측정.", en: "8-week double-blind placebo-controlled trial with 132 subjects with neurasthenia symptoms. Measured fatigue and quality-of-life indicators.", ja: "神経衰弱症状のある132名を対象とした8週間二重盲検プラセボ対照試験。疲労と生活の質の指標を測定。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/16336163/"
      }
    ]
  },
  {
    mushroom: "Turkey Tail",
    mushroomKo: "구름버섯",
    mushroomJa: "ターキーテール",
    compound: "PSK (Krestin) / PSP",
    compoundNote: { ko: "면역 다당류 — 임상 연구 가장 많은 버섯", en: "Immune polysaccharides — most clinically studied mushroom", ja: "免疫多糖類 — 最も臨床研究が多いきのこ" },
    studies: [
      {
        title: "Polysaccharide K and Coriolus versicolor extract in integrative oncology",
        authors: "Standish L.J. et al.",
        journal: "Integrative Cancer Therapies",
        year: 2008,
        institution: "Bastyr University Research Institute, USA",
        what: { ko: "PSK(폴리사카라이드-K) 관련 무작위 대조 임상시험 다수를 체계적으로 검토. 면역 마커 측정 연구 포함.", en: "Systematic review of multiple RCTs on PSK (polysaccharide-K). Includes studies measuring immune markers.", ja: "PSK（多糖類-K）に関する複数のRCTの系統的レビュー。免疫マーカーを測定した研究を含む。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/19116226/"
      }
    ]
  },
  {
    mushroom: "Chaga",
    mushroomKo: "차가버섯",
    mushroomJa: "チャーガ",
    compound: "Betulinic acid / Inotodiol",
    compoundNote: { ko: "항산화 관련 — ORAC 지수 최상위 식품 중 하나", en: "Antioxidant-related — among highest ORAC values of any food", ja: "抗酸化関連 — 食品中で最高レベルのORAC値の一つ" },
    studies: [
      {
        title: "Antioxidant activities of water extract of Inonotus obliquus",
        authors: "Nakajima Y. et al.",
        journal: "Journal of Ethnopharmacology",
        year: 2009,
        institution: "Kyushu University, Japan",
        what: { ko: "차가 수성 추출물의 라디칼 소거 활성(DPPH 및 ABTS 분석)과 총 폴리페놀 함량을 측정.", en: "Measured radical scavenging activity (DPPH and ABTS assays) and total polyphenol content of aqueous Chaga extract.", ja: "チャーガ水性抽出物のラジカル消去活性（DPPHおよびABTSアッセイ）と総ポリフェノール含量を測定。" },
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/19501271/"
      }
    ]
  }
]

export function Research() {
  const [activeMushroom, setActiveMushroom] = useState(0)
  const [lang, setLang] = useState<'ko' | 'en' | 'ja'>('ko')

  const active = studies[activeMushroom]

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-600" />
            <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase">
              {lang === 'ko' ? '진행 중인 과학 연구' : lang === 'ja' ? '進行中の科学研究' : 'Ongoing Scientific Research'}
            </span>
            <div className="w-8 h-px bg-amber-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            {lang === 'ko' ? '연구자들은 무엇을 발견했나' : lang === 'ja' ? '研究者は何を発見したか' : 'What researchers have found'}
          </h2>
          <p className="text-green-800/60 text-sm leading-relaxed">
            {lang === 'ko'
              ? '아래 연구들은 독립 학술지에 발표된 동료심사 논문입니다. 본 제품의 효능을 주장하는 것이 아니며, 각 버섯 성분에 대한 과학적 관심을 보여주는 참고 자료입니다.'
              : lang === 'ja'
              ? '以下の研究は独立した学術誌に掲載された査読済み論文です。本製品の効能を主張するものではなく、各きのこ成分に対する科学的関心を示す参考資料です。'
              : 'The studies below are peer-reviewed papers published in independent academic journals. They do not constitute product claims — they represent the scientific interest in these compounds.'}
          </p>

          {/* Lang toggle */}
          <div className="flex justify-center gap-2 mt-6">
            {(['ko', 'en', 'ja'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                  lang === l
                    ? 'bg-green-900 text-white border-green-900'
                    : 'bg-white text-green-900 border-green-900/30 hover:border-green-900'
                }`}
              >
                {l === 'ko' ? '한국어' : l === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </div>

        {/* Mushroom tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {studies.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveMushroom(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeMushroom === i
                  ? 'bg-green-900 text-white border-green-900'
                  : 'bg-white text-green-900 border-green-900/20 hover:border-green-900/60'
              }`}
            >
              {lang === 'ko' ? s.mushroomKo : lang === 'ja' ? s.mushroomJa : s.mushroom}
            </button>
          ))}
        </div>

        {/* Compound badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
            🔬 {active.compound}
          </span>
          <span className="text-xs text-green-800/50">{active.compoundNote[lang]}</span>
        </div>

        {/* Studies */}
        <div className="space-y-6">
          {active.studies.map((study, i) => (
            <div key={i} className="border border-stone-200 rounded-xl p-6 hover:border-amber-300 transition-colors bg-stone-50/50">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                    {study.journal} · {study.year}
                  </p>
                  <h3 className="font-serif text-base font-semibold text-green-900 leading-snug">
                    "{study.title}"
                  </h3>
                  <p className="text-xs text-green-800/50 mt-1">{study.authors} — {study.institution}</p>
                </div>
                <a
                  href={study.pubmed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-xs font-semibold text-green-700 border border-green-700/30 px-3 py-1 rounded-full hover:bg-green-700 hover:text-white transition-all"
                >
                  PubMed ↗
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-stone-100">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                  {lang === 'ko' ? '연구 내용' : lang === 'ja' ? '研究内容' : 'What was studied'}
                </p>
                <p className="text-sm text-green-900/70 leading-relaxed">
                  {study.what[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
          <p className="text-xs text-amber-800 leading-relaxed">
            {lang === 'ko'
              ? '⚠️ 위 연구들은 학술적 참고 자료이며, MYCO BLEND 제품의 효능이나 효과를 나타내지 않습니다. 본 제품은 식품이며 질병의 예방·진단·치료를 목적으로 하지 않습니다.'
              : lang === 'ja'
              ? '⚠️ 上記の研究は学術的参考資料であり、MYCO BLEND製品の効能・効果を示すものではありません。本製品は食品であり、疾病の予防・診断・治療を目的としていません。'
              : '⚠️ The studies above are academic references and do not represent claims about MYCO BLEND products. This product is a food supplement and is not intended to diagnose, treat, cure, or prevent any disease.'}
          </p>
        </div>
      </div>
    </section>
  )
}
