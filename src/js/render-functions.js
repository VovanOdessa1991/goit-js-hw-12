import { refs } from './refs';
export function render(img) {
  const list = img
    .map(
      ({ webformatURL, views, comments, likes, downloads } = img) =>
        `<li class="galery__item">
          <div class="galery__item-div">
            <a href="${webformatURL}">
              <img
                class="galery-img"
                src = "${webformatURL}"
                alt=""

              />
            </a>
            <div class="galery__info">
              <ul class="gallery__info-list">
                <!-- ! подпись под карточкой -->

                <li class="galeri__info-item">
                  <p class="galeri__info-header">Likes</p>
                  <p class="galeri__ingo-footer">${likes}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${views}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${comments}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${downloads}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`
    )
    .join('');

  refs.galery.insertAdjacentHTML('beforeend', list);
}

export function clearCiild(perents) {
  perents.innerHTML = '';

  //!  Old methods

  // const myNode = document.getElementById(`${perents}`);
  // while (perents.firstChild) {
  //   perents.removeChild(perents.lastChild);
  // }
}
// Old method
// export function print(objeckt, img, likes, vievs, comments, downloads) {
//   const list = render(img, likes, vievs, comments, downloads);
// }
