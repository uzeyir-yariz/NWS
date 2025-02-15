import { useState } from "react";
import "../style/Alert.css";
import AlertTool from "./AlertTool";

const About = () => {
  const [activeAlert, setActiveAlert] = useState(null); // Hangi AlertTool'un açık olduğunu tutar

  const handleToggle = (index) => {
    setActiveAlert(activeAlert === index ? null : index);
  };
  return (
    <section className="container">
      <h2 className="display-4 highlight pt-5 text-center">Hakkımda</h2>
      <hr />

      <AlertTool
        title="Merhaba, Ben Üzeyir Yarız"
        contents={`Web geliştirme alanında çalışıyorum ve çeşitli projeler üzerinde çalışıyorum. Bunlardan en çok odaklandıklarım NWS, Oldedb ve YusufColakMedya siteleri. Bunun yanı sıra, kendi denemelerimle oluşturduğum farklı web projeleri de bulunuyor.`}
        isOpen={activeAlert === 0}
        onClick={() => handleToggle(0)}
      />

      <AlertTool
        title="Eğitimlerim ve Sertifikalarım"
        contents={
          "Web geliştirme alanında kendimi sürekli geliştirmeye çalışıyor, yeni teknolojiler öğrenerek yetkinliklerimi artırıyorum."
        }
        list={{
          ul: [
            {
              str: "Udemy JS kursu",
              content:
                "Can Boz tarafından yapılan bir JS Udemy kursunu bitirdim.",
            },
            {
              str: "Udemy React kursu",
              content:
                "Can Boz tarafından yapılan bir React Udemy kursunu bitirdim.",
            },
          ],
        }}
        isOpen={activeAlert === 1}
        onClick={() => handleToggle(1)}
      />

      <AlertTool
        title="Hedefim ne ?"
        contents={
          "Web geliştirmede daha fazla yükselmek ve bu konuda bir çok insan ile konuşmak benim hedefimdir, programcılar ile tanışmak ve onların tecrübelerinden faydalanmak hedefim."
        }
        isOpen={activeAlert === 2}
        onClick={() => handleToggle(2)}
      />
    </section>
  );
};

export default About;
