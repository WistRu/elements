'use strict';

    const box = document.getElementById('box'),
          btns = document.getElementsByTagName('button'),
          circles = document.getElementsByClassName('circle'),
          wrapper = document.querySelector('.wrapper'),
          hearts = wrapper.querySelectorAll('.heart'),
          oneHeart = wrapper.querySelector('.heart');
          
console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '100px';

const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Fuck you');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);
// hearts[1].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";
// div.textContent = "<h1>Hello</h1>";
div.insertAdjacentHTML('afterend', '<h2>Fuck</h2>');