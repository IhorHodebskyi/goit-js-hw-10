import './css/styles.css';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
import { fetchCountries } from './js/fetchCountries';
const searchBox = document.getElementById('search-box');
const countrylist = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
searchBox.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
  e.preventDefault();

  const value = searchBox.value.trim();
  console.log(value);
  fetchCountries(value)
    .then(renderCountryList)
    .catch(err => {
      console.log(err);
    });
}

function renderCountryList(e) {
  const markup = renderCountryList
    .map(({ name, capital, population, flags, languages }) => {
      return `
            
              <img src="${flags.svg}" alt="${name.official} width="320" height="auto"">
              <p><b>capital</b>: ${capital}</p>
              <p><b>population</b>: ${population}</p>
              <p><b>languages</b>: ${languages}</p>
            
        `;
    })
    .join('');
  return (countrylist.innerHTML = markup);
}

// warning: {
//   background: '#eebf31',
//   textColor: '#fff',
//   childClassName: 'warning',
//   notiflixIconColor: 'rgba(0,0,0,0.2)',
//   fontAwesomeClassName: 'fas fa-exclamation-circle',
//   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//   backOverlayColor: 'rgba(238,191,49,0.2)', // v2.2.0 and the next versions
// },

// info: {
//   background: '#26c0d3',
//   textColor: '#fff',
//   childClassName: 'info',
//   notiflixIconColor: 'rgba(0,0,0,0.2)',
//   fontAwesomeClassName: 'fas fa-info-circle',
//   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//   backOverlayColor: 'rgba(38,192,211,0.2)', // v2.2.0 and the next versions
// },
