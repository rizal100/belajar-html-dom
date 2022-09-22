// DOM selection
// document.getElementById () -> mengembalikan element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'black';
// judul.innerHTML = 'rizal';

// document.getElementsByTEgName () -> mengembalikan HTMLcollection

// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'red';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementByClassName () -> mengembalikan HTMLcollection

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini kan yang kammu kamu';

// document.querySelector() -> mengembalikan 1 element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
// li3.style.color = 'green';

// document.querySelectorAll() [nod list] -> mengembalikan semua element

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].innerHTML = 'makan';
// }

// node root

const sectionb = document.getElementById('b');
const p4 = sectionb.querySelector('p');
p4.style.backgroundColor = 'tomato';
