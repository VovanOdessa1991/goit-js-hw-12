//pixabay.com/api/

// key=44446882-f589529ab68d1d31e6487214d;

// ! ПРимер! Извлечение фотографий «желтых цветов». Поисковый запросддолжен быть закодирован в URL:

// https://pixabay.com/api/?key=44446882-f589529ab68d1d31e6487214d&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api/';
const USERkEY = '?key=44446882-f589529ab68d1d31e6487214d';

export function getAllBooks() {
  //   const END_POINT = '/books';
  const url = `${BASE_URL}${USERkEY}`;

  const params = '&image_type=photo&orientation=horizontal';
  const headers = {};

  return fetch(url).then(res => res.json());
}
