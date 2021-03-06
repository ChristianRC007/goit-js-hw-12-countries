const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  const url = `${BASE_URL}/name/${searchQuery}`;
  return fetch(url).then(response => response.json());
}

export default { fetchCountries };
