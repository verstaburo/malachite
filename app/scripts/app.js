/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import {
  scrollAnimation,
} from '../blocks/js-functions/scroll-animation';
import {
  popups,
} from '../blocks/popups/popups';
import detectScroll from '../components/header/header';
import navigation from '../components/sticky-navigation/sticky-navigation';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  popups();
  anchor();
  scrollAnimation();
  detectScroll();
  navigation();
});
/* eslint-enable */
