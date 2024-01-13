function guncelleZaman() {
    var simdi = new Date();

    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();
    var saniye = simdi.getSeconds();

    // Saat, dakika ve saniye bilgilerini iki haneli bir formata getir
    saat = saat < 10 ? '0' + saat : saat;
    dakika = dakika < 10 ? '0' + dakika : dakika;
    saniye = saniye < 10 ? '0' + saniye : saniye;

    // HTML içindeki bir elementi güncelle
    var saatElementi = document.getElementById('saat');
    if (saatElementi) {
        saatElementi.innerHTML = saat + ':' + dakika + ':' + saniye;
    }
}

// 1000 milisaniye (1 saniye) aralıklarla guncelleZaman fonksiyonunu çağır
setInterval(guncelleZaman, 1000);


var bugununTarihi = new Date();
var gun = bugununTarihi.getDate();
var ay = bugununTarihi.getMonth() + 1; // JavaScript'te aylar 0'dan başlar, bu nedenle +1 ekliyoruz
var yil = bugununTarihi.getFullYear();
document.addEventListener("DOMContentLoaded", function() {
    
    if (ay < 10) {ay = '0' + ay}
    if (gun < 10) {gun = '0' + gun;}
    var ozelFormatliTarih = gun + '.' + ay + '.' + yil;

    fetch('https://ezanvakti.herokuapp.com/vakitler/9541')
        .then(response => response.json())
        .then(data => {
            // Veriyi işleme ve kullanma
            displayNamazVakitleri(data);
        })
        .catch(error => console.error('Veri çekme hatası:', error));

    function displayNamazVakitleri(data) {
        let now;
        for(let i = 0; i < data.length; i++){
            if(data[i].MiladiTarihKisa === ozelFormatliTarih){
                console.log("true");
                now = i;
                break;
            }
        }

        var namazVakitleriDiv = document.getElementById('namazVakitleri');
        namazVakitleriDiv.innerHTML = `
            <h3>Tarih: ${ozelFormatliTarih}</h3>
            <p>İmsak: ${data[now].Imsak}</p>
            <p>güneş: ${data[now].Gunes}</p>
            <p>öğle: ${data[now].Ogle}</p>
            <p>ikindi: ${data[now].Ikindi}</p>
            <p>aksam: ${data[now].Aksam}</p>
            <p>yatsı: ${data[now].Yatsi}</p>
        `;
    }
});