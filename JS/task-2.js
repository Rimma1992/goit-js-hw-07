const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

// const galeryContainerEl = document.querySelector(".gallery");
// const createGalery = images
//   .map(({ url, alt }) => {
//     return
//     <li>
//       < img src="${url}" alt="${alt}" width= 360 height = 300 >
//     </li>
//   })
//   .join("");
//   galeryContainerEl.insertAdjacentHTML ("beforeend",createGalery)

const listLu = document.querySelector('.gallery')

const markup = images
	.map(image => `<li><img class="pictures" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')

  listLu.insertAdjacentHTML('beforeend', markup)
  
const pictures = document.querySelectorAll('.pictures')

listLu.style.display = 'flex';
listLu.style.flexWrap = 'column-reverse'
listLu.style.listStyle = 'none'
listLu.style.gap = '20px'
listLu.style.justifyContent = 'center'

console.log(listLu);

