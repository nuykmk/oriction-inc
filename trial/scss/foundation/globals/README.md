// ==============================
// font() mixin：共通指定まとめ
// ==============================
// font-size, font-weight, line-height をまとめて指定
// @include font($fs-16, $font-weight-bold, $lh-default);



// ==============================
// プリセットmixin（用途別）
// ==============================
// よく使うパターンをショートカット化

@include font-page-title      // 64px 見出し（h1相当）
@include font-section-title   // 40px 見出し（h2相当）
@include font-heading         // 24px 見出し（h3相当）
@include font-subheading      // 18px 小見出し
@include font-body            // 16px 本文
@include font-caption         // 12px 補足／キャプション
@include font-button          // 14px ボタン用（太字）

// ==============================
// 使い分けのルール（簡潔に）
// ==============================
// ・パターン化された見出し・本文には preset mixin を使う
// ・サイズやweightが都度変わる場面では font() で直接指定