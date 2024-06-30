import Axios from 'axios';

// axios.defaults.baseURL = '';

// const BASE_URL = 'https://pixabay.com/api/';
// const USERkEY = '?key=44446882-f589529ab68d1d31e6487214d';

export async function getAllBooks(q, page = '1', pages = 15) {
  // const par = {
  //   q: q,
  //   page: page,
  //   per_page: pages,
  // };
  let axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    headers: {},
    params: {
      key: '44446882-f589529ab68d1d31e6487214d',
      q: q,
      page: page,
      per_page: pages,
    },
  });
  // const res = await axios.get('');
  try {
    const res = await axios.get('');
    return res.data;
  } catch (err) {
    console.log(err);
  }

  // !Перевірка Аксіоса(про всяк випадок)
  // .then(function (response) {
  // console.log(response.data.hits);
  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
  // })

  // ! Старий метод (про всяк випадок)
  // const END_POINT = `&q=${param}&min_width=2450`;
  // const params = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=${pages}&page=${page}`;

  // const url = `${BASE_URL}${USERkEY}${END_POINT}${params}`;

  // const headers = {};

  // const promiseIMG = fetch(url);

  // return promiseIMG
  //   .then(data => data.json())

  //   .catch(() => {
  //     console.log('Error');
  //   });
}

//  ПРимер! Извлечение фотографий «желтых цветов». Поисковый запросддолжен быть закодирован в URL:

// https://pixabay.com/api/?key=44446882-f589529ab68d1d31e6487214d&q=yellow+flowers&image_type=photo
