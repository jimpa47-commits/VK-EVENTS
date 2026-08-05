const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

        lightboxImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});