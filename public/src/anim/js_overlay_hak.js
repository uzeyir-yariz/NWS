document.addEventListener("DOMContentLoaded", function () {
    const hak = document.getElementById("hak");
    const cv = document.getElementById("cv");
    const main = document.getElementById("hakkımızda_main");

    function ekranGenisliginiOlç() {
        var ekranGenisligi = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return ekranGenisligi;
    }

    const cv_art = document.getElementById("cv_art");
    const hak_art = document.getElementById("hak_art");

    function open_CV() {
        let scren_width = ekranGenisliginiOlç();

        main.style.height = "190vh";

        cv.className = "hak_btn hak_active_btn hak_btn_left";
        hak.className = "hak_btn hak_deactive_btn hak_btn_right";
        
        if(scren_width < 850){
            cv_art.style.width = "100%"
            hak_art.style.width = "0%"
        } else{
            cv_art.style.width = "50%"
            hak_art.style.width = "0%"
        }
    }

    function open_hak() {
        let scren_width = ekranGenisliginiOlç();

        cv.className = "hak_btn hak_deactive_btn hak_btn_left";
        hak.className = "hak_btn hak_active_btn hak_btn_rigt";

        main.style.height = "50vh";

        if(scren_width < 850){
            cv_art.style.width = "0%";
            hak_art.style.width = "100%";
        } else{
            cv_art.style.width = "0%";
            hak_art.style.width = "50%";
        }
    }

    cv_art.style.width = "0%";
    hak_art.style.width = "100%";

    // "CV Göster" düğmesine tıklama olayını dinleyin
    document.getElementById("cv").addEventListener("click", open_CV);
    
    // "Hak Göster" düğmesine tıklama olayını dinleyin
    document.getElementById("hak").addEventListener("click", open_hak);
});

