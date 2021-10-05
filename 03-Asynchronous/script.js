'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//////////////////////////////////////

/*
const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.com/v3.1/name/britain`);
request.send();
//The response is in JSON
console.log(request.responseText);

request.addEventListener(`load`, function(){
    //Convererts JSON into and object and destructs it
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.getElementsByClassName.opacity = 1;
});
*/
/*
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/
    ${country}`).then(function(response){
        console.log(response);
        return response.json();

    }).then(function(data){
        console.log(data)
    });

};
*/

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

const getCountryData = function (country) {
      // Country 1
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
          console.log(response);
    
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
    
          return response.json();
        })
        .then(data => {
          renderCountry(data[0]);
          const neighbour = data[0].borders[0];
          //const neighbour = 'dfsdfdef';
    
          if (!neighbour) return;
    
          // Country 2
          return getJSON(
              fetch(`https://restcountries.com/v3.1/alpha/${neighbour}}`);
        })
        .then(response => {
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
    
          return response.json();
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
          console.error(`${err} 💥💥💥`);
          renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
         });
     };



getCountryData('germany')
