document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const initialText = "hoşgeldiniz ";
    const text = initialText.trim();
    let index = 0;

    typedText.innerHTML = "";

    function typeText() {
        if (index < text.length) {
            typedText.textContent = text.slice(0, ++index);
        }
    }

    let typingTimeout = setTimeout(() => {
        typingInterval = setInterval(typeText, 100);
    }, 1000); // Başlangıçta beklemek için ayarlayabilirsiniz
    let typingInterval;
});
