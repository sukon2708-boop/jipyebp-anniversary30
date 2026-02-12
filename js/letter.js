const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
หวัดดีฉงเมา👋🏻
ปีนี้ก็ครบรอบ 2 ปีที่เราคบกันแล้ว
ผ่านไปไวมากๆ ดีใจที่ได้เจอเบ๊บๆนะ
และขอบคุณที่เข้ามาในชีวิต 
เค้าก็อยากมีเบ๊บๆอยู่ในชีวิตไปอีกนานๆเลย ยังมีอีกหลายที่ที่อยากไป คอนเสิร์ตอีกหลายวงที่อยากดู อยู่ด้วยกันไปนานๆนะเบ๊บๆ รักค้าบ💖🐼`;


// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
