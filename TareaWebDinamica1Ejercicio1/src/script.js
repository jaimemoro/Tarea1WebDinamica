const IMG_INITIAL = "public/image1.jpg";
const MAX_NUMBER_OF_IMAGE = 4;
const MIN_NUMBER_OF_IMAGE = 1;

function changeImage(e){
    if (e.type == "click"){
        let ImgNum = Math.floor((Math.random() * MAX_NUMBER_OF_IMAGE - MIN_NUMBER_OF_IMAGE + 1) + MIN_NUMBER_OF_IMAGE);
        e.target.setAttribute("src", `public/image${ImgNum}.jpg`);
    }
}
document.getElementById("WebImage").addEventListener("click", changeImage);