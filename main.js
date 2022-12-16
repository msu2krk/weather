import './sass/main.scss'

let cityForm = document.querySelector('.weather__form')
let cityInput = document.querySelector('.weather__city')
let APIURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
let APIKEY = '?unitGroup=metric&key=4UKB3K9E52F28BLZG5FH5ETSG&include=fcst%2Calerts%2Ccurrent'
let apiView = document.querySelector('.weather__data')
let loader = document.querySelector('.weather__loader')




cityForm.addEventListener('submit', (event) => {
    let city = cityInput.value
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {
        cityInput.classList.remove('weather__city--error')
        let APIURLWITHCITY = APIURL + city + APIKEY;
        showLoader()
        fetch(APIURLWITHCITY)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return showError()
                }
            })
            .then((dataFromAPI) => {
                hideLoader();
                let view = ''
                view += `<div class="weather__location">${dataFromAPI.resolvedAddress}</div>`
                view += `<div class="weather__info">`
                //icon
                view += `<div class="weather__icon">${dataFromAPI.currentConditions.icon}</div>`
                view += `<div class="weather__temp">
                            <span class="weather__num">${dataFromAPI.currentConditions.temp}</span>
                            <span class="weather__unit">&deg;C</span>
                        </div>`
                view += `<div class="weather__desc">
                    <p class="weather__text">The amount of rainfall: ${dataFromAPI.currentConditions.precip} mm</p>
                    <p class="weather__text">Humidity: ${dataFromAPI.currentConditions.humidity} %</p>
                    <p class="weather__text">Wind: ${dataFromAPI.currentConditions.windspeed} kph</p>
                </div>`

                view += `</div >`
                view += `<div class="weather__description">${dataFromAPI.description}</div`
                apiView.innerHTML = view
            })
    }

    event.preventDefault()
})


cityInput.addEventListener('keyup', () => {
    let city = cityInput.value
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {
        cityInput.classList.remove('weather__city--error')
    }
})

let showError = () => {
    apiView.innerHTML = `<div class="weather__error">City not found, or problem with API</div>`
}

let showLoader = () => {
    loader.style.display = 'block'
}

const hideLoader = () => {
    loader.style.display = 'none';
}