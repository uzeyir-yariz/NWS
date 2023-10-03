const icons_objects = {
    icon_1:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/Tailwind%20CSS.png?raw=true",
        href_url: "https://tailwindcss.com/",
        explain: "tailwind css",
        label: "icons",
        top: "gold" 
    },
    icon_2:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/bootstrap.png?raw=true",
        href_url: "https://getbootstrap.com/",
        explain: "bootstrap",
        label: "icons",
        top: "silver" 
    },
    icon_3:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/c-sharp.png?raw=true",
        href_url: "https://www.w3schools.com/cs/index.php",
        explain: "c-sharp",
        label: "icons",
        top: "bronz" 
    },
    icon_4:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/css.png?raw=true",
        href_url: "https://www.w3schools.com/Css/",
        explain: "css",
        label: "icons",
        top: "gold" 
    },
    icon_5:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/firebase.png?raw=true",
        href_url: "https://firebase.google.com/",
        explain: "firebase",
        label: "icons",
        top: "silver" 
    },
    icon_6:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/git.png?raw=true",
        href_url: "https://git-scm.com/",
        explain: "git",
        label: "icons",
        top: "bronz" 
    },
    icon_7:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/html.png?raw=true",
        href_url: "https://www.w3schools.com/html/",
        explain: "html",
        label: "icons",
        top: "gold" 
    },
    icon_8:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/js.png?raw=true",
        href_url: "https://www.w3schools.com/Js/",
        explain: "javascript",
        label: "icons",
        top: "silver" 
    },
    icon_9:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/nodejs.png?raw=true",
        href_url: "https://nodejs.org/tr",
        explain: "node.js",
        label: "icons",
        top: "silver" 
    },
    icon_10:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/python.png?raw=true",
        href_url: "https://www.python.org/",
        explain: "python",
        label: "icons",
        top: "bronz" 
    },
    icon_11:{
        url: "https://github.com/uzeyir-yariz/NWS/blob/main/images/icons%20picture/sass.png?raw=true",
        href_url: "https://sass-lang.com/documentation/syntax/",
        explain: "sass/scss",
        label: "icons",
        top: "gold" 
    }
};



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fill_arma() {
    let section_3 = document.getElementById("section_3");

    // Icons_objects objesini diziye dönüştürün
    const iconArray = Object.values(icons_objects);

    // Iconları rastgele sıralayın
    shuffleArray(iconArray);

    for (let i = 0; i < iconArray.length; i++) {
        const icon = iconArray[i];

        const arma = document.createElement("div");
        const img = document.createElement("img");

        // Arma elementine CSS sınıfını ekleyin
        if (icon.top === "gold") {
            arma.classList.add("arma", "gold");
        } else if (icon.top === "silver") {
            arma.classList.add("arma", "silver");
        } else if (icon.top === "bronz") {
            arma.classList.add("arma", "bronze");
        }

        img.src = icon.url;
        arma.appendChild(img);
        section_3.appendChild(arma);

        // Arma öğesine onclick olayı ekleyin
        arma.onclick = function () {
            // Yeni bir sekmede belirtilen URL'yi açın
            window.open(icon.href_url, '_blank');
        };
    }
}

// * bu kod tüm elementlerin yüklenmesini sağlayacaktır
document.addEventListener("DOMContentLoaded", function () {
    fill_arma();
    animate_speed();
});



// * bu kod tüm elementlerin yüklenmesini sağlayacaktır
document.addEventListener("DOMContentLoaded", function () {
    fill_arma();
    animate_speed();
});

function animate_speed(){
    const existingElements = document.querySelectorAll(".arma");
    existingElements.forEach((element, index) => {
        element.classList.add("new-class"); // Mevcut nesnelere yeni bir sınıf ekleyin
        element.style.animationDelay = `${index * 1}s`; // Başlatma gecikmesini ayarlayın
    });
}

