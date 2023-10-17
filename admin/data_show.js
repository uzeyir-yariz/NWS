const verileriGosterButton = document.getElementById('verileriGoster');
        const veriTablosuDiv = document.getElementById('veriTablosu');
    
        verileriGosterButton.addEventListener('click', () => {
            fetch('/data_project') // Sunucudan verileri çek
                .then((response) => response.json())
                .then((data) => {
                    const veriler = data.veriler;
                    // Verileri işleyip tabloyu görüntüle
                    let tabloHTML = `
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
                    `;
                    
                    for (let i = 0; i < veriler.length; i++) {
                        const veri = veriler[i];
                        tabloHTML += `
                            <tr>
                                <td>${veri.name}</td>
                                <td>${veri.description}</td>
                                <td>${veri.href}</td>
                                <td>${veri.imageSrc}</td>
                                <td>${veri.labels.join(', ')}</td>
                            </tr>
                        `;
                    }
        
                    tabloHTML += `
                        </tbody>
                    </table>
                    `;
        
                    console.log(veriler);
        
                    veriTablosuDiv.innerHTML = tabloHTML;
                }).catch((error) => {
                    console.error('Verileri alma hatası:', error);
                });
        });
        