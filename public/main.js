const allDogsBtn = document.querySelector('#allDogs');
const friendlyDogsBtn = document.querySelector('#friendlyDogs');
const fetchDogsBtn = document.querySelector('#fetchDogs');
const footer = document.querySelector('footer');
const inputFilter = document.querySelector('#filterInput');
const filterBtn = document.querySelector('#filterBtn');

const makeList = array => {
    footer.innerHTML = ""
    console.log(array);
    array.forEach(dogObj => {
        let newTitle = document.createElement('h3');
        newTitle.textContent = dogObj.breed;
        footer.appendChild(newTitle);
        let newList = document.createElement('ul');
        footer.appendChild(newList);
        for(let key in dogObj) {
            let newItem = document.createElement('li');
            newItem.textContent = `${key}: ${dogObj[key]}`;
            newList.appendChild(newItem);
        }
    })
}

const getAllDogs = event => {
    axios.get("http://localhost:4000/api/dogs")
    .then(response => {
        console.log(response.data);
        makeList(response.data);
    })
    .catch(err => console.log(err));
}

const getFriendlyDogs = event => {
    axios.get("http://localhost:4000/api/friend")
    .then(response => {
        console.log(response.data);
        makeList(response.data);
    })
    .catch(err => console.log(err));
}

const getFetchDogs = event => {
    axios.get("http://localhost:4000/api/fetch")
    .then(response => {
        console.log(response.data);
        makeList(response.data)
    })
    .catch(err => console.log(err))
}

const dogsFilter = event => {
    event.preventDefault();
    let dogSize = inputFilter.value
    console.log(dogSize)
    axios.get(`http://localhost:4000/api/dogSize?dogSize=${dogSize}`)
    .then(response => {
        console.log(response.data)
        makeList(response.data);
    })
    .catch(err => console.log(err))
}



allDogsBtn.addEventListener('click', getAllDogs);
friendlyDogsBtn.addEventListener('click', getFriendlyDogs);
fetchDogsBtn.addEventListener('click', getFetchDogs);
filterBtn.addEventListener('click',dogsFilter);
