$(document).ready(function() {
    // Nav dosyasını yükle
    $('#nav').load('/src/JSquery/nav.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading nav: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Nav loaded successfully");
        }
    });
    
    // Footer dosyasını yükle
    $('#footer').load('/src/JSquery/footer.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading footer: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Footer loaded successfully");
        }
    });
});



// $(document).ready(function() {
//     // Nav dosyasını yükle
//     $('#nav').load('../../root/nav.html', function(response, status, xhr) {
//         if (status == "error") {
//             console.log("Error loading nav: " + xhr.status + " " + xhr.statusText);
//         } else {
//             console.log("Nav loaded successfully");
//         }
//     });
    
//     // Footer dosyasını yükle
//     $('#footer').load('../../root/footer.html', function(response, status, xhr) {
//         if (status == "error") {
//             console.log("Error loading footer: " + xhr.status + " " + xhr.statusText);
//         } else {
//             console.log("Footer loaded successfully");
//         }
//     });
// });