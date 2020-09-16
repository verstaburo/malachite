// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href

const $ = window.$;

export default function anchor() {
  $(document).on('click', '.js-anchor', (e) => {
    e.preventDefault();
    const _this = e.currentTarget;
    const target = $($(_this).attr('href'));

    if (target.length > 0) {
      $('body, html').stop().animate({
        scrollTop: target.offset().top,
      }, 1000, 'swing');
      $.fancybox.close();
    }
  });
}
