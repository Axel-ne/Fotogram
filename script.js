// const dialogRef = document.getElementById("dialog");

// function openDialog(){
//     dialogRef.showModal();
// }

// function closeDialog(){
//     dialogRef.close();
// }




const imgs = [
    "assets/imgs/Component 6.png",
    "assets/imgs/Component 7.png",
    "assets/imgs/Component 8.png",
    "assets/imgs/Component 9.png",
    "assets/imgs/Component 10.png",
    "assets/imgs/Component 11.png",
    "assets/imgs/Component 12.png",
    "assets/imgs/Component 13.png",
    "assets/imgs/Component 14.png",
    "assets/imgs/Component 15.png",
    "assets/imgs/Component 16.png",
    "assets/imgs/gallery.png"
];

const container = document.getElementById("container");

function renderImgs() {
    for (let i = 0; i < imgs.length; i++) {
        container.innerHTML += `<img class="imgs-content" src="${imgs[i]}">`
    }
}

renderImgs();