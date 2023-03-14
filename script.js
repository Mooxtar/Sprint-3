function func(){
    let summa = document.getElementById('summa');
    let x = document.getElementById('myselect');
    let i = x.selectedIndex;
    if(i == 0){
        document.getElementById('kzt').innerHTML = "-";
        document.getElementById('usd').innerHTML = "-";
        document.getElementById('eur').innerHTML = "-";
    }
    if(i == 1){
        document.getElementById('kzt').innerHTML = "-";
        document.getElementById('usd').innerHTML = (summa.value / 431).toFixed(2);
        document.getElementById('eur').innerHTML = (summa.value / 509).toFixed(2);
    }
    if(i == 2){
        document.getElementById('usd').innerHTML = "-";
        document.getElementById('kzt').innerHTML = (summa.value * 429).toFixed(2);
        document.getElementById('eur').innerHTML = (summa.value * 0.843).toFixed(2);
    }
    if(i == 3){
        document.getElementById('eur').innerHTML = "-";
        document.getElementById('kzt').innerHTML = (summa.value * 507).toFixed(2);
        document.getElementById('usd').innerHTML = (summa.value * 1.176).toFixed(2);
    }
}
