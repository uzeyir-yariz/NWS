$(document).ready(function() {
    // Nav dosyasını yükle
    $('#nav').load('/source/jsquery/nav.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading nav: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Nav loaded successfully");
        }
    });
    
    // Footer dosyasını yükle
    $('#footer').load('/source/jsquery/footer.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading footer: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Footer loaded successfully");
        }
    });
});