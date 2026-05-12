const dialogRef = document.getElementById("myDialog");

const dialogRendeer = document.getElementById("dialog-render");

const imgCounter = document.getElementById("img-counter");

const imgText = document.getElementById("img-text");

const container = document.getElementById("container");

let currentIndex = 0;



const imgDescription = [
    "Picture-1",
    "Picture-2",
    "Picture-3",
    "Picture-4",
    "Picture-5",
    "picture-6",
    "picture-7",
    "picture-8",
    "picture-9",
    "picture-10",
    "picture-11",
    "picture-12"
];

const imgs = [
    "./assets/imgs/Picture-1.jpg",
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

function openDialog(j) {
    currentIndex = j;
    dialogRendeer.innerHTML = `<img  src="${imgs[j]}">`;
    dialogRef.showModal();
    imgText.innerText = imgDescription[j];
    updateCounter();
}

function closeDialog() {
    dialogRef.close();
}

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
    imgText.innerText = imgDescription[currentIndex];
    updateCounter();
}

function previusImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }

    dialogRendeer.innerHTML = `<img src="${imgs[currentIndex]}">`;
    imgText.innerText = imgDescription[currentIndex];
    updateCounter();
}

function updateCounter() {
    imgCounter.innerText = `${currentIndex + 1}/${imgs.length}`;
}
