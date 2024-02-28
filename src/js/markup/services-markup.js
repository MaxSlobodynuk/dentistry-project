import { problems } from '../../../information.json'

const container = document.querySelector('.services-all-container');


const markup = problems.map(item => `
<li class="services-container list">
    <h3 class="services-container-title">${item.name}</h3>
    <p class="services-container-paragraph">${item.description}</p>
</li>`
).join('')


container.innerHTML = markup;