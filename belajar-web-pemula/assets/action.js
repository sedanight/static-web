let profile = document.querySelector("#profile");
profile.setAttribute("src", "assets/image/Rahmad.jpg");

profile.getAttribute("src");

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Fotoku</em>'

let newElement = document.createElement('p');

newElement.innerHTML = 'Kau Tekan Foto Profilku <span id="count">0</span> kali';

document.body.appendChild(newElement);

profile.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
 });