// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var icon = window.document.getElementById('iconAnimation')
icon.addEventListener('mouseover', iconMouseOver)
icon.addEventListener('mouseout', iconMouseOut)
function iconMouseOver() {
    icon.style.height = "40px";
    icon.style.width = "40px";
}
function iconMouseOut() {
    icon.style.height = "";
    icon.style.width = "";
}

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
function playAudio() {
    var soundEffectFlip = document.getElementById('audio');
    soundEffectFlip.play();
}
$(window).resize(function () {
    area = 50000;
    width = $(window).width();
    fontSize = (Math.ceil(area / width));
    $('div').css('font-size', fontSize);
}).resize();