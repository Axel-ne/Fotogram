const dialogRef = document.getElementById("myDialog");

const dialogRendeer = document.getElementById("dialog-render");

const imgCounter = document.getElementById("img-counter");

const imgText = document.getElementById("img-text");

let currentIndex = 0;

function openDialog(j) {
    currentIndex = j;
    dialogRendeer.innerHTML = `<img  src="${imgs[j]}">`;
    dialogRef.showModal();
    imgText.innerText = imgs[j];
    updateCounter();
}

function closeDialog() {
    dialogRef.close();
}

const imgs = [
    "./assets/imgs/Picture-1.png",
    "./assets/imgs/Picture-2.png",
    "./assets/imgs/Picture-3.png",
    "./assets/imgs/Picture-4.png",
    "./assets/imgs/Picture-5.png",
    "./assets/imgs/Picture-6.png",
    "./assets/imgs/Picture-7.png",
    "./assets/imgs/Picture-8.png",
    "./assets/imgs/Picture-9.png",
    "./assets/imgs/Picture-10.png",
    "./assets/imgs/Picture-11.png",
    "./assets/imgs/Picture-12.png",
];

const container = document.getElementById("container");

function renderImgs() {
    for (let i = 0; i < imgs.length; i++) {
        container.innerHTML += `<img tabindex="0" onclick="openDialog(${i})" class="imgs-content" src="${imgs[i]}">`;
    }
}

function nextImg() {
    currentIndex++;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }

    dialogRendeer.innerHTML = `<img src="${imgs[currentIndex]}">`;
    imgText.innerText = imgs[currentIndex];
    updateCounter();
}

function previusImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }

    dialogRendeer.innerHTML = `<img src="${imgs[currentIndex]}">`;
    imgText.innerText = imgs[currentIndex];
    updateCounter();
}

function updateCounter() {
    imgCounter.innerText = `${currentIndex + 1}/${imgs.length}`;
}
