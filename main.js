import './style.css'
import { weather } from './weather.js'

document.querySelector('#app').innerHTML = `
  <div class='main'>
    <div class='header'>
      <label class='switch'>
        <input id='switchTheme' type='checkbox'>
        <span class='slider'></span>
      </label>
      <input id='search' type='search' class='search' placeholder='Search for...'>
      <button class='creator'>GitHub</button>
    </div>
    <div class='weather_con'>
      <div class='card lg'>
        <div class='first'>
          <div class='temp'>
            <h1>24°C</h1>
            <p>Feels like: </p>
          </div>
          <div class='sun-rise-set'>
            <div class='sunrise'>
              <span>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="48" height="48" fill="url(#pattern0_11_381)"/>
                <defs>
                <pattern id="pattern0_11_381" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_11_381" transform="scale(0.02)"/>
                </pattern>
                <image id="image0_11_381" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVR4nO2Zyy4EQRSGi5hERGJjxCMgHoGNy4aFxCOI64zL0tblDXgE8SBYiEjcFtiwIhIbK+zmk2NOJ63NjKmZbqqkvqSTTlfXOf8/daqqM2VMxgArchmfAdaAEmXWjY8ACzET6P2q8QnK5VSqYKTkTZkB8zHRUloRi96YAeZiYj/LKHKRKDe5lo0vJpJGKozYsssmiom2L0b0WTH2/pxxBeBRRRUqtH0zos8L2ufBuAIwDIxWaatoRNtGpa/xAWoY8QqCEccII+IaYURcI4yIa/ynETkCDv9aRyAQCAT8BDgATo3v8I929k+M76AY38E1I0AXkPstI0Ab0GHb76egncALcAHkszYC5IEz4BlotxZcI3AOOFdNVzZmbD/jKZuQHKiZtoaF15HgBuhNNcH3HNdZ5MjczK+ZqJLwIo0alhgay7p00zAjid+SSYFW/Zd9R+fHk05aud8FRuSdRJ8e4L2RxcSk9Ct2J56NA5f8jAgeS/TtTnWFagSgBdiMneLKCrcE9MleoFe/Hu5EJSTvbkhf4wrAtop7BWZqiVPTs1qWwpZxAWAyZmLI8pQrMjORrcr6Nsp7FTPbQH854RXuUt/4bACmY3PCuta1zKI5M2X+CmBfRRSaiCFH1cJeuursRNyqiIEmYgxqjOtmxURD6zPHYkS+MH3n5AOmbkN4s1cmDwAAAABJRU5ErkJggg=="/>
                </defs>
                </svg>
              </span>
              <div>
                Sunrise
                <p>06:34 AM</p>
              </div>
            </div>
            <div class='sunset'>
              <span>
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect y="0.333374" width="48" height="48" fill="url(#pattern0_11_377)"/>
                <defs>
                <pattern id="pattern0_11_377" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_11_377" transform="scale(0.02)"/>
                </pattern>
                <image id="image0_11_377" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB70lEQVR4nO2Zyy4EQRSGi5CISGwQj4B4BERcNiwkHkFmiLsdS5c34BHEg2AhInFNsGElkdhYYeeTE6eltJiZmummKqkv6WQyOafO/0+d6uqpNiZngH3gxIQOigkdohHPiDPiG3FGfCPOiG8ENSNALzDoagQYBgaMLwBXwDswV6kRidWcB+MLQEFFyTVfzojEWPFF4xNA0RK39JsRYMaKWzA+wnczy2kjQZhIAKZVqLCWGAFWLBOLJgSARUt0QlgmEqw2so18rZ2gAJYtM6smZPhss7DaKRKJRCLeEM9+fSOo/+yliEbyAmgFGv+qtYAGoNk1r9ygLcAzcA60520EaAdOgSegyVlwiYEbgTPVdOliBjgEDhxNXGotMdNQtfAKCtwAnZkW+FnjOo8auZv5MxO/FDzPoodlDB3LuXWzMCOFX9NFgXo9093W9fGoi1Y+7wBDEpPK6QDeqrmZmIx+xbbUd6PABeURwSOp3LZM71DVANQBG9aJidzhZoEu2Qv06taD66SFJHZdco0vAFsq7gWYKiVOTRe0LYVN4wPAuGWizyGv3zIzlq/KyjbKexVTqPKcWLjLfONzAZi01oRzr2ubJWtmwvwXwJ6KmKthDHnpI+xmq85NxK2K6Knx/aNwXauYZGpD5kiMyBNm6Bx/ACrUQ216v8tzAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
              </span>
              <div>
                Sunset
                <p>20:34 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div class='sec'>
          <img class='img'/>
          <h1>Sunny</h1>
        </div>
        <div class='third'>
          <div class='bl'>
            <span>
              <svg width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="60" height="50.1266" fill="url(#pattern0_12_385)"/>
              <defs>
              <pattern id="pattern0_12_385" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_12_385" transform="scale(0.0126582 0.0151515)"/>
              </pattern>
              <image id="image0_12_385" width="79" height="66" xlink:href="data:image/png;base64,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"/>
              </defs>
              </svg>
            </span>
            <h4>41%</h4>
            <p>Humidity</p>
          </div>
          <div class='bl'>
            <span>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="60" height="59.2405" fill="url(#pattern0_12_386)"/>
              <defs>
              <pattern id="pattern0_12_386" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_12_386" transform="scale(0.0126582 0.0128205)"/>
              </pattern>
              <image id="image0_12_386" width="79" height="78" xlink:href="data:image/png;base64,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"/>
              </defs>
              </svg>
            </span>
            <h4>2km/h</h4>
            <p>Wind Speed</p>
          </div>
          <div class='bl'>
            <span>
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="58" height="58" fill="url(#pattern0_12_387)"/>
              <defs>
              <pattern id="pattern0_12_387" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_12_387" transform="scale(0.015625)"/>
              </pattern>
              <image id="image0_12_387" width="64" height="64" xlink:href="data:image/png;base64,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"/>
              </defs>
              </svg>  
            </span>
            <h4>997</h4>
            <p>Pressure</p>
          </div>
        </div>
      </div>
      <div class='card sm'>
        <h1>5 Days Forecast:</h1>
        <ul class='list'>
          <li class='item'>
            <img class='smimg'>
            <p>20°C</p>
            <p>Friday, 1 Sep</p>
          </li>
        </ul>
      </div>
      <div class='card xl'>
        <h1>Hourly Forecast:</h1>
        <div class='hourly_list'>
          <div class='tile'>
            <h4>12:00</h4>
            <span>
              <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M15.78 99.26C16.2333 98.9 16.44 98.7333 16.4 98.76C17.7067 97.68 18.7333 96.7933 19.48 96.1C20.24 95.4067 20.88 94.68 21.4 93.92C21.92 93.16 22.18 92.42 22.18 91.7C22.18 91.1533 22.0533 90.7267 21.8 90.42C21.5467 90.1133 21.1667 89.96 20.66 89.96C20.1533 89.96 19.7533 90.1533 19.46 90.54C19.18 90.9133 19.04 91.4467 19.04 92.14H15.74C15.7667 91.0067 16.0067 90.06 16.46 89.3C16.9267 88.54 17.5333 87.98 18.28 87.62C19.04 87.26 19.88 87.08 20.8 87.08C22.3867 87.08 23.58 87.4867 24.38 88.3C25.1933 89.1133 25.6 90.1733 25.6 91.48C25.6 92.9067 25.1133 94.2333 24.14 95.46C23.1667 96.6733 21.9267 97.86 20.42 99.02H25.82V101.8H15.78V99.26ZM34.5458 91.34C34.4391 90.8467 34.2524 90.48 33.9858 90.24C33.7191 89.9867 33.3391 89.86 32.8458 89.86C32.0858 89.86 31.5391 90.1933 31.2058 90.86C30.8724 91.5133 30.6991 92.5533 30.6858 93.98C30.9791 93.5133 31.3991 93.1467 31.9458 92.88C32.5058 92.6133 33.1191 92.48 33.7858 92.48C35.0924 92.48 36.1391 92.8933 36.9258 93.72C37.7258 94.5467 38.1258 95.7 38.1258 97.18C38.1258 98.1533 37.9258 99.0067 37.5258 99.74C37.1391 100.473 36.5658 101.047 35.8058 101.46C35.0591 101.873 34.1724 102.08 33.1458 102.08C31.0924 102.08 29.6658 101.44 28.8658 100.16C28.0658 98.8667 27.6658 97.0133 27.6658 94.6C27.6658 92.0667 28.0858 90.1867 28.9258 88.96C29.7791 87.72 31.1391 87.1 33.0058 87.1C34.0058 87.1 34.8458 87.3 35.5258 87.7C36.2191 88.0867 36.7391 88.6 37.0858 89.24C37.4458 89.88 37.6591 90.58 37.7258 91.34H34.5458ZM32.9658 95.18C32.3924 95.18 31.9124 95.3533 31.5258 95.7C31.1524 96.0333 30.9658 96.5133 30.9658 97.14C30.9658 97.78 31.1391 98.28 31.4858 98.64C31.8458 99 32.3524 99.18 33.0058 99.18C33.5924 99.18 34.0524 99.0067 34.3858 98.66C34.7324 98.3 34.9058 97.8133 34.9058 97.2C34.9058 96.5733 34.7391 96.08 34.4058 95.72C34.0724 95.36 33.5924 95.18 32.9658 95.18ZM39.6602 91.42C39.6602 90.3133 40.0402 89.44 40.8002 88.8C41.5602 88.1467 42.5602 87.82 43.8002 87.82C45.0402 87.82 46.0335 88.1467 46.7802 88.8C47.5402 89.44 47.9202 90.3133 47.9202 91.42C47.9202 92.5267 47.5402 93.4133 46.7802 94.08C46.0335 94.7333 45.0468 95.06 43.8202 95.06C43.0068 95.06 42.2868 94.9133 41.6602 94.62C41.0335 94.3133 40.5402 93.8867 40.1802 93.34C39.8335 92.7933 39.6602 92.1533 39.6602 91.42ZM45.2802 91.44C45.2802 90.8667 45.1335 90.4267 44.8402 90.12C44.5468 89.8133 44.2002 89.66 43.8002 89.66C43.3868 89.66 43.0335 89.8133 42.7402 90.12C42.4468 90.4267 42.3002 90.8667 42.3002 91.44C42.3002 92.0133 42.4468 92.4533 42.7402 92.76C43.0468 93.0533 43.4068 93.2 43.8202 93.2C44.2202 93.2 44.5602 93.0533 44.8402 92.76C45.1335 92.4533 45.2802 92.0133 45.2802 91.44ZM49.078 94.96C49.078 93.5733 49.378 92.34 49.978 91.26C50.578 90.1667 51.4113 89.32 52.478 88.72C53.558 88.1067 54.778 87.8 56.138 87.8C57.8046 87.8 59.2313 88.24 60.418 89.12C61.6046 90 62.398 91.2 62.798 92.72H59.038C58.758 92.1333 58.358 91.6867 57.838 91.38C57.3313 91.0733 56.7513 90.92 56.098 90.92C55.0446 90.92 54.1913 91.2867 53.538 92.02C52.8846 92.7533 52.558 93.7333 52.558 94.96C52.558 96.1867 52.8846 97.1667 53.538 97.9C54.1913 98.6333 55.0446 99 56.098 99C56.7513 99 57.3313 98.8467 57.838 98.54C58.358 98.2333 58.758 97.7867 59.038 97.2H62.798C62.398 98.72 61.6046 99.92 60.418 100.8C59.2313 101.667 57.8046 102.1 56.138 102.1C54.778 102.1 53.558 101.8 52.478 101.2C51.4113 100.587 50.578 99.74 49.978 98.66C49.378 97.58 49.078 96.3467 49.078 94.96Z" fill="white"/>
              <rect width="80" height="80" fill="url(#pattern0_4_197)"/>
              <defs>
              <pattern id="pattern0_4_197" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_4_197" transform="scale(0.00446429)"/>
              </pattern>
              <image id="image0_4_197" width="224" height="224" xlink:href="data:image/png;base64,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"/>
              </defs>
              </svg>
            </span>
            <p>26°C</p>
            <span>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="55" height="55" fill="url(#pattern0_13_395)"/>
              <defs>
              <pattern id="pattern0_13_395" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_13_395" transform="scale(0.0208333)"/>
              </pattern>
              <image id="image0_13_395" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2RvUoDQRRGF7GwSy+IubHMKwgGUlvaprS1ThVLq8wNZkZSCUIamxQ+wDYp3DFtXsFKBHeU7CiygkSJcTc7O7O/sN8DXO45x7KqVatWLWzkYdHavxItq6xDR9pAXdsqq33k0gcm/FJWQEfaPwClq0CW9n8BylYBl/ZXAUpTgazY/wNQlgq4Yn8doPAVyJr9fwBFr4Br9oMACluBBNgPBChqBQywHwZQuAokxH4oQNEqYIj9TQCFqUA22N8IUJQKuMF+FADkXSHKfiQAy7lClH0VAMirgop9JQCWUwUV+6oAkHUFVfvKACzjCqr24wBAVhXi2I8FwDKqEMd+XABIu0Jc+7EBWMoV4trXAYC0KujY1wJgKVXQsa8LAElX0LWvDcASrqBr3wQAkqpgYt8IgCVUwcS+KQCYVjC1bwzADCuY2k8CAHQr6Nn3XHS8KXI5IPey0+eLxt7l2y7Ql2Og4rxOxR0w8ZRJBYy0730QLufE8W4G/P2078hmz/e3VG5/QzFxAtQd1KmYAnUXiVYItO/IR+TyFrl3hrP3w2vb37ES2lHP3z4YimadvnaAiRFQMQfmfmpXINwbI5cTwr0uOov2xcyvWRmvMXquNYaiDdTtAhOTOnXHWf9QrVo1K/19Af9KAeOOy4JzAAAAAElFTkSuQmCC"/>
              </defs>
              </svg>
            </span>
            <h4>3km/h</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
`

weather(document.querySelector('.creator'), 
document.querySelector('.main'), 
document.getElementById('switchTheme'), 
document.getElementById('search'), 
document.querySelectorAll('.card'),
document.querySelector('.tile'),
document.querySelector('.sunrise'),
document.querySelector('.sunset'),
document.querySelector('.sec'),
document.querySelectorAll('.bl'),
document.querySelector('.list'))
