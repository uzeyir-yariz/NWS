// admin.js

document.getElementById('data_pull_project').addEventListener('click', function() {
    // Verileri çekmek için "/data" yoluna istek gönder
    fetch('/data_project')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error('Veriler çekilirken hata oluştu:', data.error);
        } else {
          console.log('Veriler başarıyla çekildi:', data.message);
        }
      })
      .catch((error) => {
        console.error('İstek sırasında bir hata oluştu:', error);
      });
  });




  