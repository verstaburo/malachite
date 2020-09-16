/* eslint-disable */
// https://github.com/jlmakes/scrollreveal
import ScrollReveal from 'scrollreveal';

const $ = window.$;

export function scrollAnimation() {
  const sr = ScrollReveal({
    reset: false,
    mobile: true,
    scale: 1,
    delay: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    duration: 500,
    cleanup: true,
  });

  function getSettings(direction) {
    return {
      interval: 100,
      distance: '30px',
      origin: direction,
    };
  }

  if ($('.js-sr_bottom').length) {
    sr.reveal('.js-sr_bottom', getSettings('bottom'));
  }

  if ($('.js-sr_left').length) {
    sr.reveal('.js-sr_left', getSettings('left'));
  }

  if ($('.js-sr_right').length) {
    sr.reveal('.js-sr_right', getSettings('right'));
  }

  if ($('.js-sr_top').length) {
    sr.reveal('.js-sr_top', getSettings('top'));
  }

  if ($('.js-sr_scale').length) {
    sr.reveal('.js-sr_scale', {
      interval: 100,
      scale: 0,
    });
  }

  if ($('.js-sr_fade').length) {
    sr.reveal('.js-sr_fade', {
      interval: 100,
      opacity: 0,
    });
  }

  if ($('.js-sr_animate').length) {
    sr.reveal('.js-sr_animate', {
      interval: 100,
      opacity: 1,
      beforeReveal: function (el) {
        el.classList.add('is-animate');
      },
    });
  }

  // Показываем элементы, если ScrollReveal не поддерживается
  if (ScrollReveal().noop) {
    $(document).find('.js-sr').removeClass('.js-sr');
  }
}

/* eslint-enable */
