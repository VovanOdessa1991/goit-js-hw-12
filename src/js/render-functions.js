export function render(img, likes, vievs, comments, downloads) {
  const list = `<li class="galery__item">
          <div class="galery__item-div">
            <a href="${img}">
              <img
                class="galery-img"
                src = "${img}"
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
                  <p class="galeri__ingo-footer">${vievs}</p>
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
        </li>`;
  return list;
}
export function clearCiild(perents) {
  // const myNode = document.getElementById(`${perents}`);
  while (perents.firstChild) {
    perents.removeChild(perents.lastChild);
  }
}

export function print(objeckt, img, likes, vievs, comments, downloads) {
  const list = render(img, likes, vievs, comments, downloads);
  objeckt.insertAdjacentHTML('afterbegin', list);
  // refs.galery.i;
}
