const btn1 = document.getElementsByClassName('btn1');
//const btn = document.getElementById('btn1');
const changeSize = (event) => {
    document.getElementById('h').style.fontSize = "50px";
};
btn1[0].addEventListener('click', changeSize);


const btn2 = document.getElementById('btn2');
const changeFontStyle = (event) => {
    document.getElementById('p1').style.fontFamily = "Sans-serif";
};
btn2.addEventListener('click', changeFontStyle);


const btn3 = document.getElementById('btn3');
const highlightPra  = (event) => {
    document.getElementById('p1').style.background = "yellow";
};
btn3.addEventListener('click', highlightPra);


const btn4 = document.getElementById('btn4');
const hideImage  = (event) => {
    document.getElementById('img1').style.display = "none";
};
btn4.addEventListener('click', hideImage);


const btn5 = document.getElementById('btn5');
const alternateImage  = (event) => {
    const img1 = document.getElementById('img2')
    const img2 = document.getElementById('img3')
    if(img2.style.display === "none"){
        img2.style.display = "block";
        img1.style.display = "none";

    } else {
        img1.style.display = "block";
        img2.style.display = "none";
    }
};
btn5.addEventListener('click', alternateImage);


const section = document.getElementById('move');
const changeImage  = (event) => {
    const img1 = document.getElementById('img4')
    const img2 = document.getElementById('img5')
    if(img2.style.display === "none"){
        img2.style.display = "block";
        img1.style.display = "none";

    } else {
        img1.style.display = "block";
        img2.style.display = "none";
    }};
section.addEventListener('mouseover', changeImage);


const img = document.getElementById('img6');
const rightClicks  = (event) => {
    alert("You can't save it")
};
img.addEventListener('contextmenu', rightClicks);


const input = document.getElementById('input');
const typeInput  = (event) => {
    alert("You can't input")
};
input.addEventListener('input', typeInput);


document.addEventListener("DOMContentLoaded", () => alert("Page loaded"));


const paragraph = document.getElementById('p2');
const mouseOver = () => {paragraph.style.background = "yellow";};
const mouseOut = () => {paragraph.style.background = "white";};
paragraph.addEventListener('mouseover', mouseOver);
paragraph.addEventListener('mouseout', mouseOut);