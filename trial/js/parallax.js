// ==============================
// パララックス（レスポンシブ対応）
// ==============================

ScrollTrigger.matchMedia({

  // 🖥 PC：751px以上
  "(min-width: 751px)": function () {

    // y方向パララックス（テキスト）
document.querySelectorAll(".js-parallax-y").forEach((el) => {
  gsap.fromTo(el,
    { y: 20 },
    {
      y: -20,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    }
  );
});

// x方向パララックス（テキスト）
document.querySelectorAll(".js-parallax-x").forEach((el) => {
  gsap.fromTo(el,
    { x: 15 },
    {
      x: -15,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    }
  );
});

    // 背景画像パララックス
    document.querySelectorAll(".js-parallax-bg").forEach((el) => {
      gsap.fromTo(el,
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          }
        }
      );
    });

  },

  // 📱 SP：750px以下
  "(max-width: 750px)": function () {

    // y方向パララックス（テキスト）
document.querySelectorAll(".js-parallax-y").forEach((el) => {
  gsap.fromTo(el,
    { y: 10 },
    {
      y: -6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    }
  );
});

// x方向パララックス（テキスト）
document.querySelectorAll(".js-parallax-x").forEach((el) => {
  gsap.fromTo(el,
    { x: 8 },
    {
      x: -6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    }
  );
});

    // 背景画像パララックス
    document.querySelectorAll(".js-parallax-bg").forEach((el) => {
      gsap.fromTo(el,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          }
        }
      );
    });

  }

});