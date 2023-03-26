// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// LinkedIn,Github and CV icons

function newImgLinkedin() {
    document.getElementById("img1").src = "js/icons/linkedin.png";
}
function oldImgLinkedin() {
    document.getElementById("img1").src = "js/icons/linkedingray.png";
}
function newImgGithub() {
    document.getElementById("img2").src = "js/icons/github.png";
}
function oldImgGithub() {
    document.getElementById("img2").src = "js/icons/githubgray.png";
}
function newImgResume() {
    document.getElementById("img3").src = "js/icons/resumeicon.png";
}
function oldImgResume() {
    document.getElementById("img3").src = "js/icons/resumeicongray.png";
}

function newImgResume() {
    document.getElementById("img3").src = "js/icons/resumeicon.png";
}
function oldImgResume() {
    document.getElementById("img3").src = "js/icons/resumeicongray.png";
}

// Icons in the cards

function ChangeIcon(img, novoSrc) {
    img.src = novoSrc;
}