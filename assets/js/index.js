import * as jquery from '../../node_modules/jquery/dist/jquery.js';

// import { setRandomBackground } from './setRandomBackground.js';
// setRandomBackground();

import * as owlCarousel from '../../node_modules/owl.carousel/dist/owl.carousel.js';
import { setOwlCarousel } from './owl_carousel/setOwlCarousel.js';
setOwlCarousel();

import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import { setPhotoSwipeLightbox } from './photoswap/setPhotoSwipeLightbox.js';
setPhotoSwipeLightbox(PhotoSwipeLightbox);

import * as theme from './theme.js';