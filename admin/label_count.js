// HTML'de tanımlı olan form ve diğer elementleri al
const veri_ekleme_form = document.getElementById('veriEkleForm');
const alt_labels_div = document.getElementById('alt_labels');
const labels_count_input = document.getElementById('labels_count');

// Form gönderildiğinde çalışacak olan submit olayı dinleyicisi
veri_ekleme_form.addEventListener('submit', (e) => {
    e.preventDefault(); // Formun otomatik gönderilmesini engelle

    // Formdan verileri al
    const title = document.getElementById('title').value;
    const explain = document.getElementById('explain').value;
    const link = document.getElementById('link').value;
    const foto_link = document.getElementById('foto_link').value;
    const labels_count = parseInt(labels_count_input.value);

    // Label input verilerini al
    const labels = [];
    for(let i = 1; i <= labels_count; i++){
        const labelInput = document.getElementById(`label_${i}`);
        labels.push(labelInput.value);
    }

    // Veriyi bir JavaScript nesnesine çevir
    const veri = {
        name: title,
        description: explain,
        href: link,
        imageSrc: foto_link,
        labels: labels
    }

    // Sunucuya POST isteği gönder
    fetch('/add_project', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veri)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Veri sunucuya yüklendi: ', data.message);
        // Başka bir form için bu formu temizle
        veri_ekleme_form.reset();
    })
    .catch((err) => {
        console.error('Veri gönderme hatası: ', err);
    })
});

// Label sayısı değiştiğinde çalışacak olay dinleyicisi
labels_count_input.addEventListener('change', () => {
    const labels_count = parseInt(labels_count_input.value);
    alt_labels_div.innerHTML = '';

    for(let i = 1; i <= labels_count; i++){
        const labelInput = document.createElement('input');
        labelInput.type = 'text';
        labelInput.id = `label_${i}`;
        labelInput.placeholder = `Label ${i}`;
        alt_labels_div.appendChild(labelInput);
    }
});
