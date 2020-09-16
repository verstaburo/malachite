/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';
import {
  freeze,
  unfreeze
} from '../js-functions/freeze';

const $ = window.$;

export function popups() {
  $('.js-fancybox').fancybox({
    transitionDuration: 300,
    smallBtn: false,
    buttons: [],
    closeExisting: false,
  });
}
/* eslint-enable */
