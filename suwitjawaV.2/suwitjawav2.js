function getpilihankomputer() {
  // komputer
  // bangkit bilangan rendom
  const comp = Math.round(Math.random() * 3);

  // console.log(comp);

  if (comp == 1) return 'gajah';
  if (comp == 2) return 'orang';
  return 'semut';
}
// peraturan bermain
function gethasil(comp, p) {
  if (p == comp) return 'SERI!!!';
  if (p == 'gajah') return comp == 'orang' ? 'MENANG' : 'KALAH';
  if (p == 'orang') return comp == 'gajah' ? 'KALAH' : 'MENANG';
  if (p == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG';
}

// membuat fungsi seperti loading

function loading() {
  const imgkomputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const wktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - wktumulai > 1000) {
      clearInterval;
      return;
    }
    imgkomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

// menampil kan

const pilihan = document.querySelectorAll('li img');
// memproses pilihan player dan pemain
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihankomputer = getpilihankomputer();
    const pilihanplayer = pil.className;
    const hasil = gethasil(pilihankomputer, pilihanplayer);
    // memasukkan function loading
    loading();
    //  ketika waktu berhenti jalankan function
    setTimeout(function () {
      // console.log(pilihankomputer);
      // console.log(pilihanplayer);
      // console.log(hasil);

      // menampilkan img yang di pilih komputer

      const imgkomputer = document.querySelector('.img-komputer');

      imgkomputer.setAttribute('src', 'img/' + pilihankomputer + '.png');

      // menulis informasi menang atau kalah

      const info = document.querySelector('.info');

      info.innerHTML = hasil;
    }, 1005);
  });
});

// const pgajah = document.querySelector('.gajah');

// pgajah.addEventListener('click', function () {
//   const pilihankomputer = getpilihankomputer();
//   const pilihanplayer = pgajah.className;
//   const hasil = gethasil(pilihankomputer, pilihanplayer);
//   console.log(pilihankomputer);
//   console.log(pilihanplayer);
//   console.log(hasil);

//   const imgkomputer = document.querySelector('.img-komputer');
//   imgkomputer.setAttribute('src', 'img/' + pilihankomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const orang = document.querySelector('.orang');

// orang.addEventListener('click', function () {
//   const pilihankomputer = getpilihankomputer();
//   const pilihanplayer = orang.className;
//   const hasil = gethasil(pilihankomputer, pilihanplayer);
//   console.log(pilihankomputer);
//   console.log(pilihanplayer);
//   console.log(hasil);

//   const imgkomputer = document.querySelector('.img-komputer');
//   imgkomputer.setAttribute('src', 'img/' + pilihankomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const semut = document.querySelector('.semut');

// semut.addEventListener('click', function () {
//   const pilihankomputer = getpilihankomputer();
//   const pilihanplayer = semut.className;
//   const hasil = gethasil(pilihankomputer, pilihanplayer);
//   console.log(pilihankomputer);
//   console.log(pilihanplayer);
//   console.log(hasil);

//   const imgkomputer = document.querySelector('.img-komputer');
//   imgkomputer.setAttribute('src', 'img/' + pilihankomputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
