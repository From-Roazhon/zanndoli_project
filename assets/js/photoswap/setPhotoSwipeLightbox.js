export function setPhotoSwipeLightbox(PhotoSwipeLightbox) {

    const arrowSVG = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';

    const options = {
        arrowPrevSVG: arrowSVG,
        arrowNextSVG: arrowSVG,

        bgOpacity: 0.8,

        counter: true,

        showHideAnimationType: 'zoom',
        showAnimationDuration: 700,
        hideAnimationDuration: 500,
      
        // to apply styles just to this instance of PhotoSwipe
        mainClass: 'pswp--custom-icon-colors pswp--custom-bg',
        
        gallery: '#gallery--getting-started',
        children: 'a',
        pswpModule: () => import('../../../node_modules/photoswipe/dist/photoswipe.esm.js')
      };

    const lightbox = new PhotoSwipeLightbox(options);

    let firstElWithBadge;
    let lastElWithBadge;

    // Gallery is starting to open
    lightbox.on('afterInit', () => {
      firstElWithBadge = lightbox.pswp.currSlide.data.element;
      hideBadge(firstElWithBadge);
    });

    // Gallery is starting to close
    lightbox.on('close', () => {
      lastElWithBadge = lightbox.pswp.currSlide.data.element;
      if(lastElWithBadge !== firstElWithBadge) {
        showBadge(firstElWithBadge);
        hideBadge(lastElWithBadge);
      }
    });

    // Gallery is closed
    lightbox.on('destroy', () => {
        showBadge(lastElWithBadge);
    });

    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el, pswp) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
              }
            }
            el.innerHTML = captionHTML || '';
          });
        }
      });
    });

    lightbox.init();

    function hideBadge(el) {
      el.querySelector('.badge')
        .classList
        .add('badge--hidden');
    };
    function showBadge(el) {
      el.querySelector('.badge')
        .classList
        .remove('badge--hidden');
    }
}