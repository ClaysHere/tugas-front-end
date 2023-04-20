const images = [
  "url('/assets/img/bgm-1.jpg')",
  "url('/assets/img/bgm-2.jpg')",
  "url('/assets/img/bgm-1.jpg')",
  "url('/assets/img/bgm-2.jpg')",
  "url('/assets/img/bgm-1.jpg')",
  "url('/assets/img/bgm-2.jpg')",
];

const quotes = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Praesent commodo massa nec mauris.",
  "Aenean faucibus nulla sed aliquet consequat.",
  "Vivamus id orci sit amet elit rhoncus porttitor.",
  "Lumayanlah",
];

const body = document.querySelector(".container");
const quote = document.querySelector(".quote");

let index = 0;

function changeBackgroundAndQuote() {
  // ganti gambar latar belakang
  body.style.backgroundImage = images[index];

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
setInterval(changeBackgroundAndQuote, 3000);

const fixedNav = document.querySelector(".fixed-nav");
const box = document.querySelector(".not-fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY >= box.offsetHeight) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});
