const images = [
  "url('/assets/img/bg-1.jpg')",
  "url('/assets/img/bg-2.jpg')",
  "url('/assets/img/bg-3.jpg')",
  "url('/assets/img/bg-4.jpg')",
  "url('/assets/img/bg-5.JPG')",
];

const quotes = [
  "Blue whales are the largest animals ever known to have lived on Earth. These magnificent marine mammals rule the oceans at up to 100 feet long and upwards of 200 tons. Their tongues alone can weigh as much as an elephant. Their hearts, as much as an automobile",
  "Found in cool, coastal waters around the world, great whites are the largest predatory fish on Earth. They grow to an average of 15 feet in length, though specimens exceeding 20 feet and weighing up to 5,000 pounds have been recorded.",
  "Red pandas feed mainly on bamboo using their opposable thumb. While their thumb-like appendages can be used in the same way as that of giant pandas, it is believed that the red panda's opposable thumbs may have evolved as an adaptation for grasping branches in trees rather than for stripping bamboo.",
  "The dugong is one of four species of the order Sirenia, a group of marine mammals are strictly herbivorous meaning they eat only plants. They’re a tropical to sub-tropical species found in 37 different countries, however Australian waters are home to one of the largest population of dugong, approximating 80,000 – 85,000.",
  "Sumatran rhinos are the smallest of the living rhinoceroses and the only Asian rhino with two horns. They are covered with long hair and are more closely related to the extinct woolly rhinos than any of the other rhino species alive today.",
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
setInterval(changeBackgroundAndQuote, 4000);

const fixedNav = document.querySelector(".fixed-nav");
const box = document.querySelector(".not-fixed");
const navC = document.querySelector(".not");

window.addEventListener("scroll", () => {
  if (window.scrollY >= box.offsetHeight) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= navC.offsetHeight) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});

const fikri = document.querySelector('#fikri');
const naomi = document.querySelector('#naomi');
const angelica = document.querySelector('#angelica');
const nama = document.querySelector('#nama');
const nim = document.querySelector('#nim');
const alamat = document.querySelector('#alamat');
const nomer = document.querySelector('#nomer');
const email = document.querySelector('#email');
const banner = document.querySelector('#banner')

fikri.addEventListener('click', () => {
    banner.textContent = 'FIKRI'
    nama.textContent = ': M. FIKRI';
    nim.textContent = ': 221110816';
    alamat.textContent = ': Jl.H.M. Said Gg.Pelajar';
    nomer.textContent = ': +62 851-7201-0442';
    email.innerHTML = ': <a href="mailto:muhammadfikri4402@gmail.com">muhammadfikri4402@gmail.com</a>';
  });
  
  naomi.addEventListener('click', () => {
    banner.textContent = 'NAOMI'
    nama.textContent = ': NAOMI PRISELLA';
    nim.textContent = ': 221111798';
    alamat.textContent = ': Jl.Bilal Harmonis Blok 1 No.63';
    nomer.textContent = ': +62 812-6016-6555';
    email.innerHTML = ': <a href="mailto:naomiprisella@gmail.com">naomiprisella@gmail.com</a>';

  });
  
  angelica.addEventListener('click', () => {
    banner.textContent = 'ANGELICA'
    nama.textContent = ': ANGELICA THOMAS';
    nim.textContent = ': 221111885';
    alamat.textContent = ': Jl.Jend. Sudirman No.335';
    nomer.textContent = ': +62 888-0786-8689';
    email.innerHTML = ': <a href="mailto:angelica101w@gmail.com">angelica101w@gmail.com</a>';

  });
  


