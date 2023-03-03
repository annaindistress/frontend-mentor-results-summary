'use strict';

import data from './data.json' assert { type: 'JSON' };

const listElement = document.querySelector('.card__list');

console.log(data);

const renderItem = item => {
  const li = document.createElement('li');
  li.classList.add(
    'card__item',
    `card__item--${item.category[0].toLowerCase() + item.category.slice(1)}`
  );
  li.style.backgroundImage = `url(${item.icon})`;
  li.innerHTML = `
    ${item.category}
    <span class="card__item-result">
      <span class="card__item-result-number">${item.score}</span>
      / 100
    </span>
  `;
  listElement.append(li);
};

data.forEach(item => renderItem(item));
