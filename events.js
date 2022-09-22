// Event handler -> menimpa item
// inline HTML atribute (TIDAK REKOMENDID)

const tombol = document.querySelector('.p3');

document.addEventListener('click', function () {
  tombol.style.backgroundColor = 'black';
  tombol.style.color = '#ffff';
});

// Element method

const p2 = document.querySelector('.p2');

function ubahWarna() {
  p2.style.backgroundColor = 'black';
  p2.style.color = '#ffff';
}
// unuk menjalankan funtion ubah warna untuk p2
p2.onclick = ubahWarna;

// addEventListener -> menambah item

const p4 = document.querySelectorAll('section#b .p4')[0];

p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const li = ul.querySelector('li:nth-child(3)');
  const membuatli = document.createElement('li');
  const isili = document.createTextNode('ini yang di keluarkan paragraf4');
  membuatli.appendChild(isili);

  ul.insertBefore(membuatli, li);
});

// perbedaan event handler dan addEventListener

// Event handler
const p1 = document.querySelector('.p1');

p1.onclick = function () {
  p1.style.backgroundColor = 'black';
};

p1.onclick = function () {
  p1.style.color = '#ffff';
};

// addEventListener

const link = document.querySelector('a');

link.addEventListener('click', function () {
  link.style.backgroundColor = 'orange';
});

link.addEventListener('click', function () {
  link.innerHTML = 'ini ke ganti kan';
});
