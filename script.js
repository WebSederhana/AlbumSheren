const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("close");


// Ketika salah satu foto diklik
photos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        // Masukkan foto yang diklik ke tampilan besar
        lightboxImage.src = photo.src;

        // Tampilkan tampilan foto besar
        lightbox.style.display = "flex";

        // Supaya halaman tidak bisa discroll ketika foto besar terbuka
        document.body.style.overflow = "hidden";

    });

});


// Tombol X
closeButton.addEventListener("click", function() {

    lightbox.style.display = "none";

    document.body.style.overflow = "";

});


// Klik bagian hitam di luar foto
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});


// Tekan tombol ESC untuk menutup
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});

// =========================
// JAM HIDUP WAKTU INDONESIA
// =========================

function updateClock() {

    const now = new Date();

    const options = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    const time = new Intl.DateTimeFormat(
        "id-ID",
        options
    ).format(now);

    document.getElementById("clockTime").textContent = time;

}


// Jalankan jam pertama kali
updateClock();


// Perbarui setiap 1 detik
setInterval(updateClock, 1000);

