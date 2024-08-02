function errorNA() {
    clearTimeout()
    document.getElementById('naerror').style.display = 'block';
    setTimeout(function(){
        document.getElementById('naerror').classList.add('zoom-out');
    }, 3000);
    setTimeout(function(){
        document.getElementById('naerror').classList.remove('zoom-out');
        document.getElementById('naerror').style.display = 'none';
    }, 3200);
}

function webedition(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/web-edition.jpg)';
    document.getElementById('game-header').src = './images/web-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT WEB EDITION';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'block';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gameselection').style.display = 'block';
    document.getElementById('gtabs2').style.fontWeight = '700';
    document.getElementById('gtabs2').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown1').style.display = 'flex';
    document.getElementById('dropdown2').style.display = 'flex';
    // document.getElementById('dropdown3').style.display = 'none'; // shadow client
    document.getElementById('dropdown4').style.display = 'none';
    document.getElementById('dropdown5').style.display = 'none';
    // document.getElementById('dropdown6').style.display = 'none'; // better eagler
    // document.getElementById('dropdown7').style.display = 'none'; // astra client
    document.getElementById('dropdown8').style.display = 'none';
    document.getElementById('dropdown9').style.display = 'none';
    document.getElementById('dropdown10').style.display = 'none';
    latestrelease()
}
function moddededition(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/modded-edition.jpg)';
    document.getElementById('game-header').src = './images/modded-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MODDED';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gameselection').style.display = 'block';
    document.getElementById('gtabs3').style.fontWeight = '700';
    document.getElementById('gtabs3').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown1').style.display = 'none';
    document.getElementById('dropdown2').style.display = 'none';
    document.getElementById('dropdown3').style.display = 'flex';
    document.getElementById('dropdown4').style.display = 'flex';
    document.getElementById('dropdown5').style.display = 'flex';
    document.getElementById('dropdown6').style.display = 'flex';
    document.getElementById('dropdown7').style.display = 'flex';
    document.getElementById('dropdown8').style.display = 'none';
    document.getElementById('dropdown9').style.display = 'none';
    document.getElementById('dropdown10').style.display = 'none';
    eaglerforge()
}
function eaglercontrols(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/controls-edition.jpg)';
    document.getElementById('game-header').src = './images/controls-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MOBILE/CONTROLLER';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gameselection').style.display = 'block';
    document.getElementById('gtabs4').style.fontWeight = '700';
    document.getElementById('gtabs4').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown1').style.display = 'none';
    document.getElementById('dropdown2').style.display = 'none';
    document.getElementById('dropdown3').style.display = 'none';
    document.getElementById('dropdown4').style.display = 'none';
    document.getElementById('dropdown5').style.display = 'none';
    document.getElementById('dropdown6').style.display = 'none';
    document.getElementById('dropdown7').style.display = 'none';
    document.getElementById('dropdown8').style.display = 'flex';
    document.getElementById('dropdown9').style.display = 'flex';
    document.getElementById('dropdown10').style.display = 'flex';
    dogomobile()
}

function dogomobile() {
    document.getElementById('gametitle').innerHTML = "FlamedDogo's Mobile UI";
    document.getElementById('gameversion').innerHTML = '1.8.8';
    document.getElementById('gameicon').src = './images/m-logo10.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=flameddogo99-eaglermobile.js';
}

function redmobile() {
    document.getElementById('gametitle').innerHTML = "Red's Mobile UI";
    document.getElementById('gameversion').innerHTML = '1.8.8';
    document.getElementById('gameicon').src = './images/m-logo9.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=irv77-eaglercraft-mobile.js';
}

function redcontroller() {
    document.getElementById('gametitle').innerHTML = "Red's Controller Support";
    document.getElementById('gameversion').innerHTML = '1.8.8';
    document.getElementById('gameicon').src = './images/m-logo8.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=irv77-eaglerconsole.js';
}

function eaglerforge() {
    document.getElementById('gametitle').innerHTML = 'Eaglerforge';
    document.getElementById('gameversion').innerHTML = '1.8.8';
    document.getElementById('gameicon').src = './images/m-logo5.png';
    document.getElementById('playbutton').href = 'mc/eaglerforge/';
}

function resentclient() {
    document.getElementById('gametitle').innerHTML = 'Resent Client';
    document.getElementById('gameversion').innerHTML = '1.8.8';
    document.getElementById('gameicon').src = './images/m-logo4.png';
    document.getElementById('playbutton').href = 'mc/resentclient/';
}

function latestrelease() {
    document.getElementById('gametitle').innerHTML = 'Latest release';
    document.getElementById('gameversion').innerHTML = '1.8.8-u35';
    document.getElementById('gameicon').src = './images/m-logo1.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/';
}

function previousrelease() {
    document.getElementById('gametitle').innerHTML = 'Previous release';
    document.getElementById('gameversion').innerHTML = '1.5.2-sp1.01';
    document.getElementById('gameicon').src = './images/m-logo2.png';
    document.getElementById('playbutton').href = 'mc/1.5.2/';
}

function dropdowntoggle(){
    if (document.getElementById('dropdn').style.visibility === 'hidden') {
        document.getElementById('dropdn').style.visibility = 'visible';
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>';
    } else {
        document.getElementById('dropdn').style.visibility = 'hidden'; 
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>';
    }

}

function resetSelected() {
    document.getElementById('gtabs1').style.fontWeight = '';
    document.getElementById('gtabs1').style.borderLeft = '';
    document.getElementById('gtabs2').style.fontWeight = '';
    document.getElementById('gtabs2').style.borderLeft = '';
    document.getElementById('gtabs3').style.fontWeight = '';
    document.getElementById('gtabs3').style.borderLeft = '';
    document.getElementById('gtabs4').style.fontWeight = '';
    document.getElementById('gtabs4').style.borderLeft = '';
    document.getElementById('gtabs5').style.fontWeight = '';
    document.getElementById('gtabs5').style.borderLeft = '';
    document.getElementById('gtabs6').style.fontWeight = '';
    document.getElementById('gtabs6').style.borderLeft = '';
    document.getElementById('gtabs7').style.fontWeight = '';
    document.getElementById('gtabs7').style.borderLeft = '';
    document.getElementById('gtabs8').style.fontWeight = '';
    document.getElementById('gtabs8').style.borderLeft = '';
    document.getElementById('game-header').style.display = 'block';
}

function resetDefault() {
    document.getElementById('drop').style.display = 'flex';
    document.getElementById('mainbutton').classList.remove('playButton2');
    document.getElementById('mainbutton').classList.add('playButton');
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

console.clear()
