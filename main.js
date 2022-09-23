let username = prompt("Kullanıcı Adınız: ");
let saat = document.getElementById('saat')
window.onload = startTime;
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function startTime() {
    var today = new Date();
    var d = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (d==1){
        d="Pazartesi";
    }
    if (d==2){
        d="Salı";
    }
    if (d==3){
        d="Çarşamba";
    }
    if (d==4){
        d="Perşembe";
    }
    if (d==5){
        d="Cuma";
    }
    if (d==6){
        d="Cumartesi";
    }
    if (d==7){
        d="Pazar";
    }

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    text = ""
    text = h + ":" + m + ":" + s + " " + d;
    t = setTimeout('startTime()', 1000);
    let div = document.querySelector("div#i")
    
    let msg = `<pre> Merhaba, <b>${username}</b>! Hoş geldin!<br> ${text}
tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript <br> bölümü 1. Ödevindesiniz.</pre>`

    div.innerHTML = msg;
}


