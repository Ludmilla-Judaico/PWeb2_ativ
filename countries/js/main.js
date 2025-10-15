import {flags} from './flags.js'

flags.forEach(flag => {
    const section = document.querySelector('.flags')
    section.insertAdjacentHTML('beforeend', 
        `<div>
            <img src="countries/${flag.image}">
            <p>${flag.name}</p>
        </div>`
    )
});