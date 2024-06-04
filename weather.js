export function weather(creatorBtn, mainCon, switcher, searchInp, cards, tile, sunrise, sunset, sec, bl, list) {

    const apiKey = 'Enter your API key from OpenWeather'

    const changeTheme = function() {
        if(switcher.checked) {
            mainCon.classList.add('whiteTheme')
            cards.forEach(element => {
                element.style.background = '#d9d9d9'
                element.style.color = '#1e1e1e'
            });
            creatorBtn.style.background = '#d9d9d9'
            creatorBtn.style.color = '#1e1e1e'
            searchInp.style.background = '#d9d9d9'
            searchInp.style.color = '#1e1e1e'
            tile.style.background = '#ffffff'
        } else {
            mainCon.classList.remove('whiteTheme')
            cards.forEach(element => {
                element.removeAttribute('style')
            });
            creatorBtn.removeAttribute('style')
            searchInp.removeAttribute('style')
            tile.removeAttribute('style')
        }
    }
    const getWeather = function() {
        list.innerHTML = ''
        let cityName = searchInp.value
        if(cityName === '') {
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
                bl[1].querySelector('h4').innerText = data.wind.speed + 'm/s'
                bl[2].querySelector('h4').innerText = data.main.pressure
            })
            fetch(dayUrl).then(resp => resp.json()).then(data => {
                console.log(data)
                for(let i=7; i < data.list.length; i+=8) {
                    console.log(data.list[i])
                    let weekdaymonth = ''
                    const weatherData = data.list[i]
                    const date = new Date(weatherData.dt_txt)
                    const week = date.toLocaleDateString('en-EN', {weekday: 'long'})
                    const day = date.getDate()
                    const month = date.toLocaleDateString('en-EN', {month: 'long'})
                    weekdaymonth = `${week}, ${day} ${month}`
                    list.innerHTML += `
                        <li class='item'>
                            <img class='smimg' src='https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png'>
                            <p>${weatherData.main.temp} °C</p>
                            <p>${weekdaymonth}</p>
                        </li>
                    `
                }
            })
        }

    }
    searchInp.addEventListener('change', getWeather)
    switcher.addEventListener('change', changeTheme)
}
