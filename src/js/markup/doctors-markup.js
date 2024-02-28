import { clinic_doctors } from '../../../information.json';

const doctors = document.querySelector('.doctors-together');
const markup = clinic_doctors
  .map(
    ({ name, specialty, photo_url, description }) => `
<li class='doctor-item'>
<img class="doctor-img" src=${photo_url} width="150" alt=${description}>
    <h3 class="doctor-name">${name}</h3>
      <p class="doctor-place">
      ${specialty} 
    </p>  
</li>     
`
  )
  .join('');

doctors.innerHTML = markup;
