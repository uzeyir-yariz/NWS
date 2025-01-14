import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";

import "./style/_main.css"
import "./style/HomeCard.css"
import "./style/Header.css"
import "./style/Footer.css"
import "./style/DeadLine.css"
import "./style/MainContent.css"
import "./style/ProjectCard.css"

createRoot(document.getElementById("root")).render(<App />);

/*

// TODO: body kısmı gradyan olacak
// TODO: tüm projelerim kısmında gelen projeler rastgele bir sırayla yazılması gerekiyor
TODO: başlıkların arasında daha fazla boşluk olması gerekiyor
TODO: bildiğim diller kısmı eklenmeli bunun için ise bana ekstra bir data gerekiyor, yani data kısmına bilinen diller eklenecektir
TODO: projeler kartlar kısmı responsive değil ve sorunlu, yani şöyle kartları kaplayacak bir container daha olması gerekiyor ve buda responsive tasarım için içinde bulunması gerekiyor bu sayede responsive yapabilirim
TODO: projeler kartları baştan figmada tasarlar

*/