const images = document.querySelectorAll("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let index = 0;

function nextPic() {
    images[index].style.display = "none";
    index++;

    if (index > images.length - 1) {
        index = 0;
    }

    images[index].style.display = "inline-block";
    nextBtn.style.height = images[index].height + "px";
    prevBtn.style.height = images[index].height + "px";
}

function prevPic() {
    images[index].style.display = "none";
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    images[index].style.display = "inline-block";
    nextBtn.style.height = images[index].height + "px";
    prevBtn.style.height = images[index].height + "px";
}

const id = setInterval(() => {
    nextPic();
}, 3000);

nextBtn.addEventListener("click", () => {
    clearInterval(id);
    nextPic();
});

prevBtn.addEventListener("click", () => {
    clearInterval(id);
    prevPic();
});