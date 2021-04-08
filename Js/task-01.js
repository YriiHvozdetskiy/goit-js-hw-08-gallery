const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */

const refs = {
    gallaryList: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    closeBtnModal: document.querySelector('[data-action="close-lightbox"]'),
};

function makeGallaryList(images) {
    const gallaryList = images
        .map(
            ({ original, preview }) =>
                `<li class="gallery__item">
                    <a class="gallery__link" href="#">
                        <img 
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="Tulips"/>
                    </a>
                </li>
                 `,
        )
        .join('');

    refs.gallaryList.innerHTML = gallaryList;
}

makeGallaryList(images);

const imageModalRef = refs.modal.querySelector('[data-action="image"]');

refs.gallaryList.addEventListener('click', onGallaryList);

function onGallaryList(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    openModal();

    imageModalRef.src = e.target.dataset.source;

    // const imageArr = images.map((img) => img.original);
    // console.log(imageArr.indexOf(e.target.dataset.source));

    // console.log(e.target.dataset.source);
}

function openModal() {
    refs.modal.classList.add('is-open');

    refs.closeBtnModal.addEventListener('click', closeModal);
    refs.modal.addEventListener('click', onOverlay);
    window.addEventListener('keydown', onKeydownClose);
}

function closeModal() {
    refs.modal.classList.remove('is-open');
    refs.closeBtnModal.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', onKeydownClose);
    refs.modal.removeEventListener('click', onOverlay);
    imageModalRef.src = '';
}

function onKeydownClose(e) {
    if (e.code === 'Escape') closeModal();
}

function onOverlay(e) {
    if (e.target !== imageModalRef) closeModal();
}

window.addEventListener('keydown', onFlipSlides);

function onFlipSlides(e) {
    if (e.code === 'ArrowRight') {
        // console.log(e.target.dataset.src);
    }
    console.log(e.code);
}
