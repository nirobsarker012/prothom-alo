class NSVideoSlider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.swiper = new Swiper(".nsVideoSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".ns_slide_dots",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".ns_slide_right_btn",
        prevEl: ".ns_slide_left_btn",
      },
    });
  }
  disconnectedCallback() {}
}

if (!customElements.get("ns-video-slider")) {
  customElements.define("ns-video-slider", NSVideoSlider);
}
