import './css/styles.css';
import Notiflix from 'notiflix';
// import { fetchCountries } from './fetch';
import axios from "axios";

const refs = {
input: document.querySelector('input'),
form: document.querySelector('.search-form'),
buttonLoad: document.querySelector('.load-more'),
gallery: document.querySelector('.gallery')
}

const BASE_URL = "https://pixabay.com/api/";

refs.form.addEventListener('submit', (onFormSubmit));
refs.input.addEventListener('input', () => {});

let nameSearch = refs.input.value;
 

async function fetchImages() {
    try {
        const response = await axios.get(`${BASE_URL}?key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&safesearch=true&q=${nameSearch}`);
        const arrayImages = await response.data.hits;

        if(arrayImages === 0) {
            Notiflix.Notify.warning(
                "Sorry, there are no images matching your search query. Please try again.")
        }
        return arrayImages       
        
    } catch(error) {
        console.log(error)
    }
}

    
function onFormSubmit(e) {    
    e.preventDefault()
nameSearch = refs.input.value;
    if(nameSearch === "") {
        cleanMarkup()
        return
    }
   
  fetchImages() 
    .then(images => {
      insertMarkup(images);
    }).catch(error => (console.log(error)))
  }

  const createMarkup = img => `
  <div class="photo-card">
         <a href="${img.largeImageURL}">
          <img class="gallery__image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
          </a>
        <div class="info">
              <p class="info-item">
                  <b>Likes<br>${img.likes}</b>
              </p>
              <p class="info-item">
              <b>Views<br>${img.views}</b>
              </p>
              <p class="info-item">
              <b>Comments<br>${img.comments}</b>
              </p>
              <p class="info-item">
              <b>Downloads<br>${img.downloads}</b>
              </p>
        </div>
    </div>
        `;


  function insertMarkup(arrayImages) {
    const result = generateMarkup(arrayImages);
    refs.gallery.insertAdjacentHTML('beforeend', result);
}


  function generateMarkup(arrayImages) {
      return arrayImages.reduce((acc, img) => acc + createMarkup(img), "") 
    };

  
  function cleanMarkup(){
      refs.gallery.innerHTML = " ";
  }


onFormSubmit()
