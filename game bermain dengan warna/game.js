const acak = document.querySelector('button.acak');
const merah = document.querySelector('button.merah');
const kuning = document.querySelector('button.kuning');
const tomato = document.querySelector('button.tomato');
const hitam = document.querySelector('button.hitam');
const putih = document.querySelector('button.putih');

acak.addEventListener('click', function () {
  // document.body.style.backgroundColor = 'rebeccapurple';
  // document.body.setAttribute('class', 'tmerah');
  // document.body.classList.toggle('tmerah');
});

merah.addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
});

kuning.addEventListener('click', function () {
  document.body.style.backgroundColor = 'yellow';
});

tomato.addEventListener('click', function () {
  document.body.style.backgroundColor = 'tomato';
});

hitam.addEventListener('click', function () {
  document.body.style.backgroundColor = 'black';
});

putih.addEventListener('click', function () {
  document.body.style.backgroundColor = '#ffff';
});

const acakacak = document.createElement('button');
const isiacakacak = document.createTextNode('acakwarna');
acakacak.appendChild(isiacakacak);
acakacak.setAttribute('type', 'buttom');
putih.after(acakacak);

acakacak.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');

smerah.addEventListener('input', function () {
  // smerah.value
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = `rgb( ${r} , ${g} , ${b} )`;
});

shijau.addEventListener('input', function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = `rgb( ${r} , ${g} , ${b} )`;
});

sbiru.addEventListener('input', function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = `rgb( ${r} , ${g} , ${b} )`;
});

document.body.addEventListener('mouseover', function (event) {
  // // posisi mause
  // event.clientx
  // event.clienty
  // // ukuran browser
  // console.log(window.innerWidth);
  const xpost = Math.round((event.clientX / window.innerWidth) * 255);
  const ypost = Math.round((event.clientY / window.innerHeight) * 255);
  // console.log(xpost);
  // console.log(ypost);
  document.body.style.backgroundColor = `rgb( ${xpost} , ${ypost} , 100 )`;
});
