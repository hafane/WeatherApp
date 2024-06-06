export function weather(creatorBtn, mainCon, switcher,
    searchInp, cards, sunrise, sunset, sec, bl,
    list, hourly) {

    const apiKey = ''

    const getWeather = function () {
        list.innerHTML = ''
        hourly.innerHTML = ''
        let cityName = searchInp.value
        if (cityName === '') {
            searchInp.placeholder = 'Please enter a city name'
        } else {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            let dayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
            fetch(url).then(resp => resp.json()).then(data => {
                const rise = data.sys.sunrise
                const dateRise = new Date(rise * 1000)
                const formRise = `${('0' + dateRise.getHours()).slice(-2)}:${('0' + dateRise.getMinutes()).slice(-2)}`
                const set = data.sys.sunset
                const dateSet = new Date(set * 1000)
                const formSet = `${('0' + dateSet.getHours()).slice(-2)}:${('0' + dateSet.getMinutes()).slice(-2)}`
                sunrise.querySelector('p').innerText = formRise
                sunset.querySelector('p').innerText = formSet
                cards[0].querySelector('p').innerText = 'Feels like: ' + data.main.feels_like + '°C'
                cards[0].querySelector('h1').innerText = data.main.temp + '°C'
                sec.querySelector('h1').innerText = data.weather[0].main
                sec.querySelector('img').setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
                bl[0].querySelector('h4').innerText = data.main.humidity + '%'
                bl[1].querySelector('h4').innerText = data.wind.speed + 'km/h'
                bl[2].querySelector('h4').innerText = data.main.pressure
            })
            fetch(dayUrl).then(resp => resp.json()).then(data => {
                console.log(data)
                for (let i = 7; i < data.list.length; i += 8) {
                    let weekdaymonth = ''
                    const weatherData = data.list[i]
                    const date = new Date(weatherData.dt_txt)
                    const week = date.toLocaleDateString('en-EN', { weekday: 'long' })
                    const day = date.getDate()
                    const month = date.toLocaleDateString('en-EN', { month: 'long' })
                    weekdaymonth = `${week}, ${day} ${month}`
                    list.innerHTML += `
                        <li class='item'>
                            <img class='smimg' src='https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png'>
                            <p>${weatherData.main.temp} °C</p>
                            <p>${weekdaymonth}</p>
                        </li>
                    `
                }
                for (let i = 0; i < 4; i++) {
                    let weatherData = data.list[i]
                    let time = data.list[i].dt_txt.slice(11, 16)
                    hourly.innerHTML += `
                    <div class='tile'>
                        <h4>${time}</h4>
                        <img src='https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png' />
                        <p>${weatherData.main.temp} °C</p>
                        <span>
                            <svg width="55" height="55" viewBox="0 0 55 55" transform='rotate(${weatherData.wind.deg})' fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="55" height="55" fill="url(#pattern0_13_395)"/>
                            <defs>
                            <pattern id="pattern0_13_395" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_13_395" transform="scale(0.0208333)"/>
                            </pattern>
                            <image id="image0_13_395" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2RvUoDQRRGF7GwSy+IubHMKwgGUlvaprS1ThVLq8wNZkZSCUIamxQ+wDYp3DFtXsFKBHeU7CiygkSJcTc7O7O/sN8DXO45x7KqVatWLWzkYdHavxItq6xDR9pAXdsqq33k0gcm/FJWQEfaPwClq0CW9n8BylYBl/ZXAUpTgazY/wNQlgq4Yn8doPAVyJr9fwBFr4Br9oMACluBBNgPBChqBQywHwZQuAokxH4oQNEqYIj9TQCFqUA22N8IUJQKuMF+FADkXSHKfiQAy7lClH0VAMirgop9JQCWUwUV+6oAkHUFVfvKACzjCqr24wBAVhXi2I8FwDKqEMd+XABIu0Jc+7EBWMoV4trXAYC0KujY1wJgKVXQsa8LAElX0LWvDcASrqBr3wQAkqpgYt8IgCVUwcS+KQCYVjC1bwzADCuY2k8CAHQr6Nn3XHS8KXI5IPey0+eLxt7l2y7Ql2Og4rxOxR0w8ZRJBYy0730QLufE8W4G/P2078hmz/e3VG5/QzFxAtQd1KmYAnUXiVYItO/IR+TyFrl3hrP3w2vb37ES2lHP3z4YimadvnaAiRFQMQfmfmpXINwbI5cTwr0uOov2xcyvWRmvMXquNYaiDdTtAhOTOnXHWf9QrVo1K/19Af9KAeOOy4JzAAAAAElFTkSuQmCC"/>
                            </defs>
                            </svg>
                        </span>
                        <h4>${weatherData.wind.speed}km/h</h4>
                    </div>
                    `
                }
            })
        }

    }

    const changeTheme = function () {
        if (switcher.checked) {
            mainCon.classList.add('whiteTheme')
            cards.forEach(element => {
                element.style.background = '#d9d9d9'
                element.style.color = '#1e1e1e'
            });
            creatorBtn.style.background = '#d9d9d9'
            creatorBtn.style.color = '#1e1e1e'
            searchInp.style.background = '#d9d9d9'
            searchInp.style.color = '#1e1e1e'
        } else {
            mainCon.classList.remove('whiteTheme')
            cards.forEach(element => {
                element.removeAttribute('style')
            });
            creatorBtn.removeAttribute('style')
            searchInp.removeAttribute('style')
        }
    }
    searchInp.addEventListener('change', getWeather)
    switcher.addEventListener('change', changeTheme)
}
