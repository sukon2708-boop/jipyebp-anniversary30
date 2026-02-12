const gallery = document.getElementById("gallery");
const modalBackdrop = document.getElementById("modalBackdrop");
const bigImg = document.getElementById("bigImg");

const photos = [
  "assets/m1.jpg",
  "assets/m2.jpg",
  "assets/m3.jpg",
  "assets/m4.jpg",
  "assets/m5.jpg",
  "assets/m6.jpg",
];

photos.forEach(src=>{
  const img = document.createElement("img");
  img.className = "photo";
  img.src = src;
  img.alt = "memory";
  img.addEventListener("click", ()=>{
    bigImg.src = src;
    modalBackdrop.style.display = "flex";
  });
  gallery.appendChild(img);
});

document.getElementById("closeModalBtn").addEventListener("click", ()=>{
  modalBackdrop.style.display = "none";
});
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) modalBackdrop.style.display = "none";
});
