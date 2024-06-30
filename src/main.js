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
async function seartchIMG(e) {
  e.preventDefault();
  nameIMG = e.target.name.value.trim();

  // !якщо пустий рядок
  if (nameIMG === '') {
    clearCiild(refs.galery);
    refs.nextImg.classList.add('hidden');
    iziToast.info({
      title: 'Пустой РЯДОК!!',
    });
    return;
  }

  showLoader();
  try {
    const img = await getAllBooks(nameIMG);
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
    e.target.name.value = '';
  } catch (err) {
    console.log(err);
  }
}

// ! Добавление картинок
async function nextImg() {
  try {
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

      const name = await getAllBooks(nameIMG, pages++, add);
      render(name.hits);
      gallery.refresh();
      scrollEl();

      buttonNeedVisible();

      return;
    }

    const name = await getAllBooks(nameIMG, pages++, numberADDImg);
    render(name.hits);
    gallery.refresh();
    scrollEl();

    // // ! Чомусь не скролить

    // console.log('ЧоМУЖ не скролиить?');
    // scrollEl();

    // ! Це вже паніка...
    // window.scrollBy({
    //   top: 100,
    //   left: 100,
    //   behavior: 'smooth',
    // });
    // scrollBy(3000, 0);

    //! обновление галереи
    // gallery.refresh();
    // scrollEl();
    buttonNeedVisible();
  } catch (err) {
    console.log(err);
  }
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

async function scrollEl() {
  if (!refs.galery.children[0]) {
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    });
    return;
  }
  let ppp = refs.galery.children[0];

  //! dblft 480
  const cildHeight = ppp.getBoundingClientRect().height * 2;

  window.scrollBy({
    top: cildHeight,
    behavior: 'smooth',
  });
}
