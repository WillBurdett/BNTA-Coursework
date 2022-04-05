let countries = [];

// on its own would return a promise
// fetch("https://restcountries.com/v3.1/all")


const loadData = async () => {
    fetch("https://restcountries.com/v3.1/all") // passes returned value to result
    .then(result => result.json()) // passes returned value to data. the api is sending everything(json, status code). .json() is grabbing the data
    .then(data => countries = data) // we set our countries array equal to all the data
    .then(() => {

        const list = document.querySelector("#country-list");

        // const countryNames = countries.map(country => country.name.official)

        // countryNames.forEach((name) => {
        //    const listItem = document.createElement("li");
        //    listItem.innerText = name;
        //    list.appendChild(listItem);
        // })

        countries.forEach(country => {
            const listItem = document.createElement("li");
            listItem.innerText = country.name.official;
            list.appendChild(listItem);
        })
    })
}

// const renderData = async () => {
//     await loadData();
// }
// renderData();

loadData();