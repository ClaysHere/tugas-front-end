const images = [
  "url('../assets/img/bg-1.jpg')",
  "url('../assets/img/bg-2.jpg')",
  "url('../assets/img/bg-3.jpg')",
  "url('../assets/img/bg-4.jpg')",
  "url('../assets/img/bg-5.jpg')"
];

const quotes = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Praesent commodo massa nec mauris.",
  "Aenean faucibus nulla sed aliquet consequat.",
  "Vivamus id orci sit amet elit rhoncus porttitor."
];

const body = document.querySelector(".container");
const quote = document.querySelector(".quote");

let index = 0;

function changeBackground() {
  // ganti gambar latar belakang
  body.style.backgroundImage = images[index];

  // naikkan indeks untuk memilih gambar dan kutipan selanjutnya
  index++;

  // reset indeks ke 0 jika sudah mencapai panjang array quotes
  if (index >= images.length) {
    index = 0;
  }
}

function changeQuote() {
    // ganti kalimat kutipan
    quote.textContent = quotes[index];
  
    // naikkan indeks untuk memilih gambar dan kutipan selanjutnya
    index++;
  
    // reset indeks ke 0 jika sudah mencapai panjang array quotes
    if (index >= quotes.length) {
      index = 0;
    }
  }

// panggil fungsi setiap 5 detik
setInterval(changeBackground, 3000);
setInterval(changeQuote, 3000);

const fixedNav = document.querySelector(".fixed-nav");
const box = document.querySelector(".not-fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY >= box.offsetHeight) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});


const fikriNav = document.getElementById("fikri");
      const naomiNav = document.getElementById("naomi");
      const angelicaNav = document.getElementById("angelica");
      const nama = document.getElementById("nama");
  
      fikriNav.addEventListener("click", () => {
        nama.innerText = "Nama : M.Fikri";
      });
  
      naomiNav.addEventListener("click", () => {
        nama.innerText = "Nama : Naomi";
      });
  
      angelicaNav.addEventListener("click", () => {
        nama.innerText = "Nama : Angelica";
      });
