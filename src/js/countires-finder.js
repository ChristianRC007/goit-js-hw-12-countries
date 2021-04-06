import API from './fetch-countries.js';
import listTmpl from '../templates/country-list.hbs';
import countryTmpl from '../templates/country-thumb.hbs';
import refs from './references.js';
import cautionNotify from './noitfy.js';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onSearch, 500));

function renderListMarkup(list) {
  const murkup = listTmpl(list);
  refs.countrysList.innerHTML = murkup;
  refs.countrysList.style.padding = '5px';
}

function renderCountryThumbMarkup(list) {
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
    const dataItemsAmount = dataArray.length;
    if (dataItemsAmount > 10) {
      cautionNotify();
    }
    if (dataItemsAmount >= 2 && dataItemsAmount <= 10) {
      renderListMarkup(dataArray);
    }
    if (dataItemsAmount === 1) {
      renderCountryThumbMarkup(dataArray);
    }
  });
}
