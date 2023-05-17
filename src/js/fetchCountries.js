const BASE_URL = 'https://restcountries.com/v3.1/name';
const serchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages,',
});
function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${serchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchCountries('deutschland')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
