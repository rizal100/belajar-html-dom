// document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// parentNode.replaceChild();

// dom manipulation
// buat element baru

const pbaru = document.createElement('buttom');
const tulisanpbaru = document.createTextNode('makan makan');

// simpan tulisan ke dalam pbaru

pbaru.appendChild(tulisanpbaru);

pbaru.classList.add('biru-muda');
pbaru.style.padding = '15px';
pbaru.style.width = '100%';
pbaru.style.margin = '20px';
pbaru.style.color = 'green';
pbaru.style.fontFamily = 'Times New Roman, Times, serif';

// menyimpan pbaru di akhir section a

const ion = document.querySelector('section#b ul');
ion.appendChild(pbaru);

// node.insertBefore()

const libaruu = document.createElement('li');
const textbaru = document.createTextNode('ini item baru yang di taru di tenga');

libaruu.appendChild(textbaru);

const liYangDibawah = ion.querySelector('li:nth-child(2)');

ion.insertBefore(libaruu, liYangDibawah);

// parentNode.removeChild()

const sectiona = document.querySelector('section#a');

const link = document.getElementsByTagName('button')[0];

sectiona.removeChild(link);

// parentNode.replaceChild()

const yangmaudiganti = sectiona.getElementsByTagName('a')[0];

const elementbaru = document.createElement('button');
const textbaru2 = document.createTextNode('ini tommbol replaceChild');

elementbaru.appendChild(textbaru2);
elementbaru.style.backgroundColor = 'black';
elementbaru.style.color = '#ffff';

sectiona.replaceChild(elementbaru, yangmaudiganti);
