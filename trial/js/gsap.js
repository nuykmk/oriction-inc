// ==============================
// パララックス
// ==============================

// ===== ファーストビュー（.fv） =====

// タイムライン作成
const fvTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#fv",        // セクションのトリガー
    start: "top 80%",      // ビューポートのどの位置で発火するか
    toggleActions: "play none none none",
  }
});

// タイトル（横からフェード＋ぽよよんスライドイン）
fvTl.from("#fv .js-fade-title", {
  x: -200,               // 左から
  opacity: 0,
  duration: 2.0,
  ease: "back.out(1.7)"  // 弾む感じ（値は調整可能）
}, 0); // 開始タイミング = 0秒目



// サブコピー群（下から＋stagger）
fvTl.from("#fv .js-fade-sub-group p", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
}, 0.4); // 少し遅らせて開始

// 本文テキスト（自然なフェードイン）
fvTl.from("#fv .js-fade-text", {
  opacity: 0,
  duration: 1,
  ease: "sine.out"
}, 1); // 他より少し後に開始

// ===== About（.p-about） =====
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-about",
    start: "top 70%",
    toggleActions: "play none none none",
  }
});

// カード（背景白ボックス）
aboutTl.from(".p-about .js-fade-card", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0);

// タイトル（"About"）
aboutTl.from(".p-about .js-fade-title", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out"
}, 0.3); // 少し余白

// 「ORICTONとは？」
aboutTl.from(".p-about .js-slide-left", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power2.out"
}, 0.8);

// キャッチコピー
aboutTl.from(".p-about .js-fade-sub-group", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 1.0);

// 本文
aboutTl.from(".p-about .js-fade-text", {
  opacity: 0,
  duration: 1.4,
  stagger: 0.3, // ← ゆったりめ
  ease: "sine.out"
}, 1.6);

// ===== Merit（.p-merit） =====
const meritTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-merit",
    start: "top 70%",
    toggleActions: "play none none none",
  }
});

// カード（背景白ボックス）
meritTl.from(".p-merit .js-fade-card", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0);

// セクションタイトル
meritTl.from(".p-merit .js-fade-title", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out"
}, 0.3);

// キャッチコピー（黒背景）
meritTl.from(".p-merit .js-fade-sub-group", {
  opacity: 0,
  y: 40,
  duration: 1.0,
  ease: "power2.out"
}, 0.7);

// 本文テキスト（黒文字の一文）
meritTl.from(".p-merit .js-fade-text", {
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
  ease: "sine.out"
}, 1.3);

// 「我々宇宙人が」
meritTl.from(".p-merit .js-flash-text", {
  opacity: 0,
  duration: 0.4,
  ease: "power1.out",
  delay: window.innerWidth <= 750 ? 1.0 : 0 // ← SPだけ0.6秒遅らせる
}, 2.0);

// 「ORICTIONなんです」
meritTl.from(".p-merit .js-slide-left", {
  opacity: 0,
  x: -80,
  duration: 1.8,
  ease:  "back.out(1.2)",
  delay: window.innerWidth <= 750 ? 1.0 : 0
}, 2.4);

// ===== Schedule（.p-schedule） =====
const scheduleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-schedule",
    start: "top 80%",
    toggleActions: "play none none none",
  }
});

// カード（背景白ボックス）
scheduleTl.from(".p-schedule .js-fade-card", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0);

// タイトル（"Schedule"）
scheduleTl.from(".p-schedule .js-fade-title", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out"
}, 0.3); // 少し余白をとる

// キャッチコピー（参加概要）
scheduleTl.from(".p-schedule .js-fade-sub-group", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0.8);

// 本文テキスト（dl全体）
scheduleTl.from(".p-schedule .js-fade-text", {
  opacity: 0,
  duration: 1.3,
  ease:"sine.out"
}, 1.2);

// ===== FAQ（.p-faq） =====

const faqTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-faq",
    start: "top 80%",
    toggleActions: "play none none none",
  }
});

// セクションタイトル（"FAQ"）
faqTl.from(".p-faq .js-fade-title", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out"
}, 0);

// キャッチコピー（よくあるご質問）
faqTl.from(".p-faq .js-fade-sub-group", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0.5);

// アコーディオン全体の外枠（カード）
faqTl.from(".p-faq .js-fade-card", {
  opacity: 0,
  y: 30,
  duration: 1.0,
  ease: "power2.out"
}, 0.8);


