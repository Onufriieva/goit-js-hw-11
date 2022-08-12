// export function fetchCountries(name) {
//   const BASE_URL = "https://restcountries.com/v3.1/"
//   return fetch(
//     `${BASE_URL}name/${name}?`
//   )
//     .then(response => {        
//         if (response.status === 200) {            
//             return response.json();
//           }
                
//           if (response.status === 404) {
//             return Promise.reject('Error 404');
//           }     
//     })    
// } 







// / const onInputSearch = (e) => {
  //     cleanMarkup()
  // const nameCountry = e.target.value.trim().toLowerCase();
  
  // if(nameCountry === "") {
  //     cleanMarkup()
  //     return;
  // }  
  //   fetchCountries(nameCountry)
  //   .then(countries => {
  //     insertMarkup(countries);
  //   }).catch(error => {if(error === "Error 404") {
  //     Notiflix.Notify.failure("Oops, there is no country with that name")
  //   }})
  // }
  
  // refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
  
  // const createMaxMarkup = item => `
  // <li>
  // <img src="${item.flags.svg}" width=70px>
  // <p> ${item.name.official}</p>
  // <p>Capital: ${item.capital}</p>
  // <p>Population: ${item.population}</p>
  // <p>Languages: ${Object.values(item.languages)}</p>
  // </li>
  // `;
  
  // const createMinMarkup = item => `
  // <li>
  // <img src="${item.flags.svg}" width=70px>
  // <p> ${item.name.official}</p>
  // </li>
  // `;
  
  
  // function generateMarkup(array) {
  //     if(array.length > 10) {
  //         Notiflix.Notify.warning(
  //         "Too many matches found. Please enter a more specific name.")} 
  
  //     else if(array.length >= 2 && array.length <= 10){            
  //         return array.reduce((acc, item) => acc + createMinMarkup(item), "")}
  
  //      else if(array.length === 1) {
  //         return array.reduce((acc, item) => acc + createMaxMarkup(item), "") 
  //     } 
  // }
  
  
  // function insertMarkup(array) {
  //     const result = generateMarkup(array);
  //     refs.list.insertAdjacentHTML('beforeend', result);
  // }
  
  // function cleanMarkup(){
  //     refs.list.innerHTML = "";
  //     refs.box.innerHTML = "";
  // }