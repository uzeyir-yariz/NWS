document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const NWS = document.getElementById("NWS");
    const initialText = "hoşgeldiniz ";
    const text = initialText.trim();
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.textContent = text.slice(0, ++index);
        } else if (index === text.length) {
            clearTimeout(typingTimeout);
            setTimeout(() => {
                clearInterval(typingInterval);
                typeNWS();
            }, 500); // Bekleme süresini buradan ayarlayabilirsiniz
        }
    }

    // * bu bir süre durduruldu daha sonra tekrar açılabilir yada değiştirilebilir
    function typeNWS() {
        const nwsText = "NWS";
        let nwsIndex = 0;

        typingInterval = setInterval(() => {
            NWS.textContent += nwsText[nwsIndex];
            nwsIndex++;

            if (nwsIndex >= nwsText.length) {
                clearInterval(typingInterval);
            }
        }, 150); // Yazma hızını buradan ayarlayabilirsiniz
    }

    let typingTimeout = setTimeout(() => {
        typingInterval = setInterval(typeText, 100);
    }, 1000); // Başlangıçta beklemek için ayarlayabilirsiniz
    let typingInterval;
});
