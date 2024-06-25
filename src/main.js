import { render, clearCiild, print } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formIMG: document.querySelector('form'),
  galery: document.querySelector('.galery__list'),
  loader: document.querySelector('.loader'),
  preLoader: document.querySelector('.preLoader'),
};
// console.log('galery' + refs.galery);
hideLoader();

refs.formIMG.addEventListener('submit', needIMG);

function needIMG(e) {
  e.preventDefault();
  console.log('IMG!');
  const nameIMG = e.target.name.value;
  console.log(nameIMG);
  showLoader();
  getAllBooks(nameIMG).then(img => {
    if (img.hits.length == 0) {
      console.log('ЖОПА_КОТОСРОФА');
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    console.log('length' + img.hits.length);
    console.log(img.hits);
    clearCiild(refs.galery);

    img.hits.forEach(
      element => {
        console.log(element.downloads);
        print(
          refs.galery,
          element.webformatURL,
          element.likes,
          element.views,
          element.comments,
          element.downloads
        );
      }
      // console.log(
      //   // img, likes, vievs, comments, downloads
      //   element.id +
      //   ' ' +
      //   element.webformatURL +
      //   ' ' +
      //   element.comments +
      //   ' ' +
      //   element.downloads
      // );
    );

    let gallery = new SimpleLightbox('.galery__item-div a');
    gallery.on('show.simplelightbox', function () {
      // Do something…
    });
    loaderVision();
  });
  e.target.name.value = '';
}
function loaderVision() {
  console.log('Лоадер!');

  const mediaFiles = document.querySelectorAll('img, video');
  let i = 0;
  console.log(mediaFiles);
  Array.from(mediaFiles).forEach(file => {
    file.onload = () => {
      i++;
      console.log(i);
      // PerformanceObserverEntryList.innerHTML = (i * 100) / mediaFiles.length;
      if (i === mediaFiles.length - 2) {
        console.log('ZGRYZILOS!');
        hideLoader();
      }
    };
  });
}

const BASE_URL = 'https://pixabay.com/api/';
const USERkEY = '?key=44446882-f589529ab68d1d31e6487214d';

function getAllBooks(param) {
  const END_POINT = `&q=${param}&min_width=2450`;
  const params = '&image_type=photo&orientation=horizontal&safesearch=true';

  const url = `${BASE_URL}${USERkEY}${END_POINT}${params}`;

  const headers = {};
  // const ppc =
  //   'https://pixabay.com/api/?key=44446882-f589529ab68d1d31e6487214d&q=yellow+flowers&image_type=photo&pretty=true';
  const promiseIMG = fetch(url);

  return promiseIMG
    .then(data => data.json())

    .catch(() => {
      console.log('Error');
    });
  console.log(url);
  // return fetch(url).then(res => res.json());
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.preLoader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.preLoader.classList.add('hidden');
}

// refs.galery.insertAdjacentHTML(
//   'afterbegin',
//   render(
//     'https://pixabay.com/get/g233829aa67f63eab78797486f071f4138fd489fdd81f211174a594a6d7dbd95607f973fdb682684540da33f4ddf4d3962058b6f3c7f02f91132f35c2ae7ad777_1280.jpg',
//     23,
//     55,
//     34,
//     900
//   )
// );

// const myNode = document.getElementById(`.galery__list`);
// // console.log(refs.galery);
// while (refs.galery.lastElementChild) {
//   refs.galery.removeChild(refs.galery.lastChild);
// }
