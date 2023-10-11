const verileriGosterButton = document.getElementById('verileriGoster');
        const veriTablosuDiv = document.getElementById('veriTablosu');
    
        verileriGosterButton.addEventListener('click', () => {
            fetch('/data_project') // Sunucudan verileri çek
                .then((response) => response.json())
                .then((data) => {
                    const veriler = data.veriler;
                    // Verileri işleyip tabloyu görüntüle
                    const tabloHTML = `
                    <table>
                        <thead>
                            <tr>
                                <th>Başlık</th>
                                <th>Açıklama</th>
                                <th>Link</th>
                                <th>Fotoğraf Linki</th>
                                <th>Etiketler</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${veriler.map((veri) => `
                                <tr>
                                    <td>${veri[0].name}</td>
                                    <td>${veri[0].description}</td>
                                    <td>${veri[0].href}</td>
                                    <td>${veri[0].imageSrc}</td>
                                    <td>${veri[0].labels.map((label) => `<td>${label}</td>`).join('')}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    `;

                    console.log(veriler);
    
                    veriTablosuDiv.innerHTML = tabloHTML;
                }).catch((error) => {
                    console.error('Verileri alma hatası:', error);
                });
        });