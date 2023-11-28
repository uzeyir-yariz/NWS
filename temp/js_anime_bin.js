// burada ki kodları bir süreliğne kaldırıyorum

// <div class="column_container"></div>

// Rastgele bir 1 ve 0 dizisi oluştur
function generateRandomBinaryString(length) {
    let binaryString = '';
    for (let i = 0; i < length; i++) {
        const randomBit = Math.random() < 0.5 ? '0' : '1';
        binaryString += randomBit;
    }
    return binaryString;
}

// Sayfa yüklendiğinde çalışacak fonksiyon
window.addEventListener('load', () => {
    const container = document.querySelector('.column_container'); 
    const screenWidth = window.innerWidth; // Ekranın genişliği

    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        const randomBinaryString = generateRandomBinaryString(screenWidth / 10);
        div.textContent = randomBinaryString;
        div.classList = 'random_column';
        container.appendChild(div);
    }
});