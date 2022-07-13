export function setPhotoSwipeLightbox(PhotoSwipeLightbox) {

    const options = {
        gallery: '#gallery--getting-started',
        children: 'a',
        pswpModule: () => import('../../../node_modules/photoswipe/dist/photoswipe.esm.js')
    };

    const lightbox = new PhotoSwipeLightbox(options);

    lightbox.init();
}