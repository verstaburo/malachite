const $ = window.$;

export default function detectScroll() {
  $(window).on('scroll', () => {
    const sT = $(window).scrollTop();
    const body = $('body');
    if (sT > 1) {
      $(body).addClass('is-header-stuck');
    } else {
      $(body).removeClass('is-header-stuck');
    }
  });
}
