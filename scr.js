
let clickmod = 1;
let bghta20 = false;
let bal = JSON.parse(localStorage.getItem('balance'));
let buscnt = JSON.parse(localStorage.getItem('buscount'));
let income = JSON.parse(localStorage.getItem('income'));
let trolleycnt = JSON.parse(localStorage.getItem('trolleycount'));
let tramcnt = JSON.parse(localStorage.getItem('tramcount'));
clickmod = JSON.parse(localStorage.getItem('clickmod'));
bghta20 = JSON.parse(localStorage.getItem('bghta20'));
bghta20 = bghta20 === true

function saveGame(){
    localStorage.setItem('balance', JSON.stringify(bal));
    localStorage.setItem('buscount', JSON.stringify(buscnt));
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('trolleycount', JSON.stringify(trolleycnt));
    localStorage.setItem('tramcount', JSON.stringify(tramcnt));
    localStorage.setItem('clickmod', JSON.stringify(clickmod));
    localStorage.setItem('bghta20', JSON.stringify(bghta20));
    window.alert('Zapisano grę!');
}

function silentSaveGame(){
    localStorage.setItem('balance', JSON.stringify(bal));
    localStorage.setItem('buscount', JSON.stringify(buscnt));
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('trolleycount', JSON.stringify(trolleycnt));
    localStorage.setItem('tramcount', JSON.stringify(tramcnt));
    localStorage.setItem('clickmod', JSON.stringify(clickmod));
    localStorage.setItem('bghta20', JSON.stringify(bghta20));
}

const buses = [
    {name: 'Urbino 8', incomemod: 1.1, price: 1000},
    {name: 'Urbino 9.5', incomemod: 1.8, price: 4000},
    {name: 'Urbino 10.5', incomemod: 2.1, price: 6000},
    {name: 'Urbino 12', incomemod: 2.6, price: 8000},
    {name: 'Urbino 18', incomemod: 2.76, price: 16000},
]

const prices = [
    0, 750, 4000, 6000, 8000, 16000, 15000, 21000, 24000, 24500, 25500, 27500, 35000
]

const incomemods = [
    //u8
    1,
    //u95
    2,
    //u18
    4,
    //alp86
    2,
    //jelcz121m
    6
]

const clickmods = [
    1,
    // u105
    1,
    // u12
    2,
    //u24
    4,
    //manlion
    6,
    //u12hyd
    7,
    //u18hyd
    8
]

function buymanlionlong(){
    const manlionlong = document.getElementById("manlionlong");
    if (bal >= prices[12]){
        bal = bal - prices[12];
        console.log('kupiono u18hyd');
        clickmod = clickmod + clickmods[6];
        income = income + incomemods[4];
        buscnt = buscnt + 1;
        window.alert('Kupiono Man Lions City GXL');
        silentSaveGame();
    }
    else if (bal < prices[12]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna manlionlong')
    }
}

function buyu18hyd(){
    const u18hyd = document.getElementById("u18hyd");
    if (bal >= prices[11]){
        bal = bal - prices[11];
        console.log('kupiono u18hyd');
        clickmod = clickmod + clickmods[6];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 18 Hydrogen');
        silentSaveGame();
    }
    else if (bal < prices[11]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u18hyd')
    }
}

function buyjelcz121m(){
    const jelcz121m = document.getElementById("jelcz121m");
    if (bal >= prices[10]){
        bal = bal - prices[10];
        console.log('kupiono jelcz121m');
        income = income + incomemods[4];
        buscnt = buscnt + 1;
        window.alert('Kupiono Jelcz M121M');
        silentSaveGame();
    }
    else if (bal < prices[10]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna jelcz121m')
    }
}

function buyalp86(){
    const alp86 = document.getElementById("alp86");
    if (bal >= prices[6]){
        bal = bal - prices[6];
        console.log('kupiono alp86');
        clickmod = clickmod + clickmods[2];
        income = income + incomemods[1];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Alpino 8.6');
        silentSaveGame();
    }
    else if (bal < prices[6]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna alp86')
    }
}

function buymanlion(){
    const manlion = document.getElementById("manlion");
    if (bal >= prices[8]){
        bal = bal - prices[8];
        console.log('kupiono manlion');
        clickmod = clickmod + clickmods[4];
        buscnt = buscnt + 1;
        window.alert('Kupiono MAN Lions City');
        silentSaveGame();
    }
    else if (bal < prices[3]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna manlion')
    }
}

function buyu24(){
    const u24 = document.getElementById("u24");
    if (bal >= prices[7]){
        bal = bal - prices[7];
        console.log('kupiono u24');
        clickmod = clickmod + clickmods[3];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 24');
        silentSaveGame();
    }
    else if (bal < prices[7]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u24')
    }
}

function buyu12(){
    const u12 = document.getElementById("u105");
    if (bal >= prices[3]){
        bal = bal - prices[3];
        console.log('kupiono u12');
        clickmod = clickmod + clickmods[2];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 12');
        silentSaveGame();
    }
    else if (bal < prices[3]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u12')
    }
}

function buymana20(){
    if (bal >= prices[0]){
        if (bghta20 == false){
            bal = bal - prices[0];
            console.log('kupiono mana20');
            clickmod = clickmod + 1;
            bghta20 = true;
            buscnt = buscnt + 1;
            window.alert('Kupiono MAN A20');
            silentSaveGame();
        }
        else{
            window.alert('Już wykorzystałeś swoje kupno darmowego autobusu!')
        }
    }
    else if (bal < prices[0]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana proba kupna mana20');
    }
}

function buyu8(){
    const u8 = document.getElementById("u8");
    if (bal >= prices[1]){
        bal = bal - prices[1];
        console.log('kupiono u8');
        income = income + incomemods[0];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 8');
        silentSaveGame();
    }
    else if (bal < prices[1]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u8')
    }
}

function buyu18(){
    const u18 = document.getElementById("u18");
    if (bal >= prices[5]){
        bal = bal - prices[5];
        console.log('kupiono u18');
        income = income + incomemods[2];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 18');
        silentSaveGame();
    }
    else if (bal < prices[5]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u18')
    }
}

function buyu9(){
    const u9 = document.getElementById("u9");
    if (bal >= prices[2]){
        bal = bal - prices[2];
        console.log('kupiono u9');
        income = income + incomemods[1];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 9');
        silentSaveGame();
    }
    else if (bal < prices[2]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u9')
    }
}

function buyu105(){
    const u105 = document.getElementById("u105");
    if (bal >= prices[3]){
        bal = bal - prices[3];
        console.log('kupiono u105');
        clickmod = clickmod + clickmods[1];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 10.5');
        silentSaveGame();
    }
    else if (bal < prices[3]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u105')
    }
}

function buyu12hyd(){
    const u12hyd = document.getElementById("u105");
    if (bal >= prices[9]){
        bal = bal - prices[9];
        console.log('kupiono u12hyd');
        clickmod = clickmod + clickmods[5];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 12 Hydrogen');
        silentSaveGame();
    }
    else if (bal < prices[9]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u12hyd')
    }
}


function showbuygui(){
    const buygui = document.getElementById("buy-bus");
    buygui.style.display = "flex";
}

function ChangeLog(){
    const changelogmenu = document.getElementById('changelog');
    changelogmenu.style.display = "block";
}

function closechangelog(){
    const changelogmenu = document.getElementById('changelog');
    changelogmenu.style.display = "none";
}

function closebusgui(){
    const buygui = document.getElementById("buy-bus");
    buygui.style.display = "none";
}

function displaybal(){
    document.getElementById("bal-show").innerHTML = bal;
    document.getElementById("bus-show").innerHTML = buscnt;
    document.getElementById("income-show").innerHTML = income;
    document.getElementById("trolley-show").innerHTML = trolleycnt;
    document.getElementById("tram-show").innerHTML = tramcnt;
    document.getElementById("click-show").innerHTML = clickmod;
}

async function add(){
    await sleep(1000);
    bal = bal + income;
    displaybal();
    silentSaveGame();
    add();
}

async function showNav(){
    const navbar = document.getElementById('nav');

    navbar.style.display = 'flex';
    navbar.style.transition = 'opacity 0.3s';
    navbar.style.opacity = '1.0';
}

function hideNav(){
    const navbar = document.getElementById('nav');

    navbar.style.display = 'none';
}

function switchToTrolley(){
    const bus = document.getElementById('bus-cnt');
    const trolley = document.getElementById('trolley-cnt');
    const tram = document.getElementById('tram-cnt');

    bus.style.display = 'none';
    tram.style.display = 'none';
    trolley.style.display = 'flex';
    silentSaveGame();
}

function switchToBus(){
    const bus = document.getElementById('bus-cnt');
    const trolley = document.getElementById('trolley-cnt');
    const tram = document.getElementById('tram-cnt');

    bus.style.display = 'flex';
    tram.style.display = 'none';
    trolley.style.display = 'none';
    silentSaveGame();
}

function switchToTram(){ 
    const bus = document.getElementById('bus-cnt');
    const trolley = document.getElementById('trolley-cnt');
    const tram = document.getElementById('tram-cnt');

    bus.style.display = 'none';
    trolley.style.display = 'none';
    tram.style.display = 'flex';
    silentSaveGame();
}

function clicker(){
    const clickspace = document.getElementById('cliker');
    clickspace.style.backgroundColor = '#E2EEDE';
    clickspace.style.transition = 'background-color 0.1s';
    bal = bal + clickmod;
    displaybal();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

const clickspace = document.getElementById('cliker');

clickspace.style.backgroundColor = '#ffffff';
