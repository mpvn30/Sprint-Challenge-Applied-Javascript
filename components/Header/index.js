// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entry = document.querySelector('.header-container');

function Header() {
    const headerPanel = document.createElement('div');
    const date = document.createElement('span');
    const header = document.createElement('h1');
    const temperature = document.createElement('span');


    headerPanel.appendChild(date);
    headerPanel.appendChild(header);
    headerPanel.appendChild(temperature);

    headerPanel.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temperature');

    date.textContent = 'MARCH 28, 2019';
    header.textContent = "Lambda Times";
    temperature.textContent = '98°';

    return headerPanel;
}

entry.appendChild(Header());