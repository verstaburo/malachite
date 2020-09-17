// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href

const $ = window.$;

export default function anchor() {
  $(document).on('click', '.js-anchor', (e) => {
    e.preventDefault();
    const _this = e.currentTarget;
    if (_this.href) {
      const link = _this.href.split('#');
      const currentPage = window.location.href.split('#');
      if (link[0] === currentPage[0]) {
        const target = $(`#${link[1]}`);
        if (target.length > 0) {
          $('body, html').stop().animate({
            scrollTop: target.offset().top,
          }, 1000, 'swing');
          $.fancybox.close();
        }
      } else {
        window.location.assign(_this.href);
      }
    }
  });
}
