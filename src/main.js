import { render, clearCiild } from './js/render-functions';
import { getAllBooks } from './js/pixabay-api';
import { refs } from './js/refs';

import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

hideLoader();
// !номер текущей страницы
let pages = 1;
// !Общее количество  бесплатных картинок.
let totalHits;
// ! Имя картинок
let nameIMG = '';
// !! Для теста сколь ко картинок за раз добавить
const numberADDImg = 15;
// ! Проверка
let totalHitsFull = 0;

refs.formIMG.addEventListener('submit', seartchIMG);
refs.nextImg.addEventListener('click', nextImg);
let gallery = new SimpleLightbox('.galery__list a');

// ! Поиск Картинок в перший раз
function seartchIMG(e) {
  e.preventDefault();
  nameIMG = e.target.name.value.trim();

  // !якщо пустий рядок
  if (nameIMG === '') {
    clearCiild(refs.galery);
    iziToast.info({
      title: 'Пустой РЯДОК!!',
    });
    return;
  }

  showLoader();

  getAllBooks(nameIMG).then(img => {
    // || img.totalHits == total
    // !Якщо нічого не знайшло
    if (img.hits.length == 0) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      clearCiild(refs.galery);
      nameIMG = '';
      totalHits = 0;
      // !!! Костіль почему-то моя функция тут не работает О_о  ---- 147  buttonNeedVisible()
      // уже нет времени разбираться О_о
      refs.nextImg.classList.add('hidden');

      return;
    }
    pages++;

    clearCiild(refs.galery);

    totalHits = img.totalHits;

    render(img.hits);
    buttonNeedVisible();

    gallery.refresh();
    loaderVision();
  });
  e.target.name.value = '';
}

// ! Добавление картинок
function nextImg() {
  // !  Проверка можно ли добавлять картинки
  if (totalHits <= refs.galery.childNodes.length + numberADDImg) {
    iziToast.error({
      title: 'Error',
      message: 'УСЕ!',
    });

    const add = totalHits - refs.galery.childNodes.length;
    // !Єто если уже совсем нельзя
    if (add <= 0) {
      iziToast.error({
        title: 'Error',
        message: 'STOP!',
      });

      buttonNeedVisible();

      return;
    }

    getAllBooks(nameIMG, pages++, add).then(name => render(name.hits));
    gallery.refresh();

    // ! Обновление галереи
    gallery.refresh();

    buttonNeedVisible();
    scrollEl();
    return;
  }

  getAllBooks(nameIMG, pages++, numberADDImg).then(name => render(name.hits));

  // ! Чомусь не скролить

  console.log('ЧоМУЖ не скролиить?');
  scrollEl();

  // ! Це вже паніка...
  window.scrollBy({
    top: 100,
    left: 100,
    behavior: 'smooth',
  });
  scrollBy(3000, 0);

  //! обновление галереи
  gallery.refresh();
  scrollEl();
  buttonNeedVisible();
}

// ! Ждун для загрузки картинок
function loaderVision() {
  const mediaFiles = document.querySelectorAll('img, video');
  let i = 0;

  Array.from(mediaFiles).forEach(file => {
    file.onload = () => {
      i++;

      if (i === mediaFiles.length - 2) {
        hideLoader();
      }
    };
  });
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.preLoader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.preLoader.classList.add('hidden');
  // !ТУТ скролить! але без getBoundingClientRect!
  // console.log(' Тут скролить... ');
  // scrollEl();
}

function buttonNeedVisible() {
  if (totalHits === refs.galery.childNodes.length) {
    refs.nextImg.classList.add('hidden');
  } else refs.nextImg.classList.remove('hidden');
}

// ! Тест прокрутки через таймаут О_о
setTimeout(() => {
  console.log('Delayed for 1 second.');
  scrollEl();
  console.log('Прокрутка scrollEl() Через таймаут!');
}, 15000);

async function scrollEl() {
  if (!refs.galery.children[0]) {
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    });
    return;
  }
  let ppp = refs.galery.children[0];
  const cildHeight = ppp.getBoundingClientRect().height * 2;
  console.log('СКРОЛ');
  window.scrollBy({
    top: cildHeight,
    behavior: 'smooth',
  });
}
