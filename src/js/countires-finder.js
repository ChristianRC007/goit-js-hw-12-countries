import API from './fetch-countries.js';
import listTmpl from '../templates/country-list.hbs';
import countryTmpl from '../templates/country-thumb.hbs';
import refs from './references.js';
const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onSearch, 500));

function renderMarkup(list) {
  const murkup = listTmpl(list);
  refs.countrysList.innerHTML = murkup;
  refs.countrysList.style.padding = '5px';
}

function render(list) {
  const murkup = countryTmpl(list);
  refs.countrysList.innerHTML = murkup;
}

function onSearch(evt) {
  const query = evt.target.value;
  if (query === '') {
    refs.countrysList.innerHTML = '';
    refs.countrysList.style.padding = '0px';
  }
  API.fetchCountries(query).then(dataArray => {
    if (dataArray.length >= 2 && dataArray.length <= 10) {
      renderMarkup(dataArray);
    }
    if (dataArray.length === 1) {
      render(dataArray);
    }
  });
}
