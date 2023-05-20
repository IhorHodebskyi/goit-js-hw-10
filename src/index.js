import './css/styles.css';
var debounce = require('lodash.debounce');
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const searchBox = document.getElementById('search-box');
const countrylist = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
searchBox.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
  e.preventDefault();

  const search = searchBox.value.trim();
  if (!search) {
    countrylist.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(search)
    .then(result => {
      if (result.length > 10) {
        Notify.info('Too many matches found. Please, enter a more specific name.');
        return;
      }
      generateMarkupCountry(result);
    })
    .catch(() => {
      countrylist.innerHTML = '';
      countryInfo.innerHTML = '';
      Notify.failure('Oops, there is no country with that name');
    });
}

function generateMarkupCountry(result) {
  const inputSearch = result.length;
  if (inputSearch === 1) {
    countrylist.innerHTML = '';
    generateMarkupCountryInfo(result);
  }

  if (inputSearch > 1 && inputSearch < 10) {
    countryInfo.innerHTML = '';
    generateMarkupCountryList(result);
  }
}

function generateMarkupCountryInfo(result) {
  const cardMarkup = result
    .map(({ flags, name, capital, population, languages }) => {
      languages = Object.values(languages).join(', ');
      return /*html*/ `
            <img src="${flags.svg}" alt="${name}" width="320" height="auto">
            <p> ${name.official}</p>
            <p>Capital: <span> ${capital}</span></p>
            <p>Population: <span> ${population}</span></p>
            <p>Languages: <span> ${languages}</span></p>`;
    })
    .join('');
  countryInfo.innerHTML = cardMarkup;
  return cardMarkup;
}

function generateMarkupCountryList(result) {
  const listMarkup = result
    .map(({ flags, name }) => {
      return /*html*/ `<img src="${flags.svg}" alt="${name}" width="100" height="auto">
    <p> ${name.official}</p>`;
    })
    .join('');
  countrylist.innerHTML = listMarkup;
  return listMarkup;
}
