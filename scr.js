let bal = 1000;
let buscnt = 0; 
let trolleycnt = 0;
let tramcnt = 0;
let income = 0;
let clickmod = 1;

const buses = [
    {name: 'Urbino 8', incomemod: 1.1, price: 1000},
    {name: 'Urbino 9.5', incomemod: 1.8, price: 4000},
    {name: 'Urbino 10.5', incomemod: 2.1, price: 6000},
    {name: 'Urbino 12', incomemod: 2.6, price: 8000},
    {name: 'Urbino 18', incomemod: 2.76, price: 16000},
]

const prices = [
    750, 4000, 6000, 8000, 16000
]

const incomemods = [
    //u8
    1,
    //u95
    2,
    //u18
    4
]

const clickmods = [
    1,
    // u105
    1,
    // u12
    2,
    
]

function buyu12(){
    const u12 = document.getElementById("u105");
    if (bal >= prices[3]){
        bal = bal - prices[3];
        console.log('kupiono u12');
        clickmod = clickmod + clickmods[2];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 12');
    }
    else if (bal < prices[3]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u12')
    }
}



function buyu8(){
    const u8 = document.getElementById("u8");
    if (bal >= prices[0]){
        bal = bal - prices[0];
        console.log('kupiono u8');
        income = income + incomemods[0];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 8');
    }
    else if (bal < prices[0]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u8')
    }
}

function buyu18(){
    const u18 = document.getElementById("u18");
    if (bal >= prices[4]){
        bal = bal - prices[4];
        console.log('kupiono u18');
        income = income + incomemods[2];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 18');
    }
    else if (bal < prices[4]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u18')
    }
}

function buyu9(){
    const u9 = document.getElementById("u9");
    if (bal >= prices[1]){
        bal = bal - prices[1];
        console.log('kupiono u9');
        income = income + incomemods[1];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 9');
    }
    else if (bal < prices[1]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u9')
    }
}

function buyu105(){
    const u105 = document.getElementById("u105");
    if (bal >= prices[2]){
        bal = bal - prices[2];
        console.log('kupiono u105');
        clickmod = clickmod + clickmods[1];
        buscnt = buscnt + 1;
        window.alert('Kupiono Solaris Urbino 10.5');
    }
    else if (bal < prices[2]){
        window.alert("Nie masz tyle pieniędzy!");
        console.log('nieudana próba kupna u105')
    }
}


function showbuygui(){
    const buygui = document.getElementById("buy-bus");
    buygui.style.display = "flex";
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
    add();
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