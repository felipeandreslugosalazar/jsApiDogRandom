// https://dog.ceo/api/breeds/image/random

const dogApiUrl = 'https://dog.ceo/api/breeds/image/random'
const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');


const getNewDog = () => {
  fetch(dogApiUrl)
    .then(apiResponse => apiResponse.json())
    .then(json => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src="${json.message}" height=250>`;
    });
}


dogButton.onclick = () => {
  getNewDog();
}
