import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

import "./style/_main.css";
import "./style/HomeCard.css";
import "./style/Header.css";
import "./style/Footer.css";
import "./style/DeadLine.css";
import "./style/MainContent.css";
import "./style/ProjectCard.css";

createRoot(document.getElementById("root")).render(<App />);

/* 

// TODO: Body kısmı gradyan olacak
// TODO: Projeler rastgele sıralanacak
// TODO: Başlıklar arasında daha fazla boşluk eklenecek
// TODO: Kartları kapsayan responsive bir container eklenmeli
// TODO: Proje kartları figmada yeniden tasarlanacak 
TODO: Bilinen diller için data kısmına ekleme yapılacak
TODO: home project kart kısmı content yazıları sadece üç satır gösterilmesi gerekiyor
TODO: footer biraz daha aşağıya inmesi gerekiyor
TODO: sosyal medya linkleri eklenecek
TODO: deadline kısmı tasarımı yapılacak

*/
