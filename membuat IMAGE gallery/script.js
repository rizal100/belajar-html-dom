const container = document.querySelector('.container');
const gbUtama = document.querySelector('.gbUtama');
const gambar = document.querySelectorAll('.gambar');

container.addEventListener('click', function (e) {
  // cek yg di klik adl gambar
  if (e.target.className == 'gambar') {
    // mengganti gambar
    gbUtama.src = e.target.src;
    gbUtama.classList.add('fade');
    setTimeout(function () {
      gbUtama.classList.remove('fade');
    }, 500);

    gambar.forEach(function (gambar) {
      //   if (gambar.classList.contains('active')) {
      //     gambar.classList.remove('active');
      //   }
      gambar.className = 'gambar';
    });

    e.target.classList.add('active');
  }
});
