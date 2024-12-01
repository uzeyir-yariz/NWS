import AlertTool from "../../components/AlertTool";
import { useState } from "react";

const AboutPage = () => {
  const [activeAlert, setActiveAlert] = useState(null); // Hangi AlertTool'un açık olduğunu tutar

  const handleToggle = (index) => {
    setActiveAlert(activeAlert === index ? null : index);
  };

  return (
    <div className="content container">
      <AlertTool
        title="Merhaba, Ben Üzeyir Yarız"
        contents={`Ben, web teknolojilerine tutku duyan bir geliştiriciyim. Web
          geliştirme projelerinde modern araçlar ve teknolojiler kullanarak, hem
          frontend hem de backend alanlarında kullanıcı dostu ve performanslı
          çözümler üretmeye çalışıyorum.`}
        buttons={[
          {
            name: "Projelerimi İncele",
            link: "/projects",
          },
          {
            name: "Benimle İletişime Geç",
            link: "/contact",
          },
        ]}
        isOpen={activeAlert === 0}
        onClick={() => handleToggle(0)}
      />

      <AlertTool
        title="Ben Kimim ?"
        contents={[
          `Lise yıllarında web geliştirme ile tanıştım ve hızla HTML, CSS ve
          JavaScript gibi temel teknolojiler üzerinde çalıştım. Ardından
          React ve Firebase gibi modern araçlarla projeler geliştirerek kendimi
          sürekli geliştirdim.`,
          `Bir web geliştirici olarak, hem frontend hem de backend alanlarında
          çalışıyorum. Kullanıcı deneyimini ön planda tutarak, performanslı ve
          ölçeklenebilir web uygulamaları geliştirmeyi amaçlıyorum.`,
        ]}
        isOpen={activeAlert === 1}
        onClick={() => handleToggle(1)}
      />

      <AlertTool
        title="Hangi Alanlarda çalıştım?"
        contents={`Web geliştirme dünyasında, hem frontend hem de backend alanında
          yetkinlik kazandım.`}
        list={{
          title: "Teknolojiler ve beceriler:",
          ul: [
            {
              str: "Frontend",
              content: `React, JavaScript, HTML5, CSS3, Sass,
              TailwindCSS`,
            },
            {
              str: "Backend",
              content: `Node.js, Express.js, MongoDB, Firebase`,
            },
            {
              str: "Veritabanı",
              content: `Firestore, MongoDB`,
            },
            {
              str: "Araçlar ve Çerçeveler",
              content: `Git, GitHub`,
            },
            {
              str: "UI/UX Tasarımı",
              content: `Figma kullanıcı deneyimi odaklı responsive tasarım`,
            },
          ],
        }}
        subContent={{
          title: "Bu teknolojilerle neler yapıyorum",
          content: `Web sitelerinin tasarımını oluşturmakla kalmıyor, aynı zamanda performans, güvenlik ve kullanıcı deneyimi odaklı backend altyapılarını da kuruyorum.`,
        }}
        isOpen={activeAlert === 2}
        onClick={() => handleToggle(2)}
      />

      <AlertTool
        title="Neler Yaptım?"
        contents={
          "Bir çok proje geliştirerek kendimi geliştirmeye çalışıyorum bunlardan bazıları:"
        }
        list={{
          ul: [
            {
              str: "E-Ticaret Sitesi",
              content:
                "React, Firebase, Mongo gibi araçları kullanarak bir e-ticaret denemesi yapıyorum.",
            },
            {
              str: "Portföy Web Sitesi",
              content:
                "Kendi portföyümü geliştirdim, modern UI/UX tekniklerini kullanarak kullanıcı dostu bir deneyim sağlamaya devam ediyorum.",
            },
            {
              str: "Blog Platformu",
              content:
                "Astro ve Vue/React kullanarak kendi blog sitemi bir şablon üzerine oturtmaya çalışıyorum.",
            },
          ],
        }}
        isOpen={activeAlert === 3}
        onClick={() => handleToggle(3)}
      />

      <AlertTool
        title="Kariyer Hedeflerim"
        contents={
          "Her zaman yeni teknolojiler öğrenmeye ve kendimi geliştirmeye açığım."
        }
        list={{
          ul: [
            {
              str: "Hedeflerim",
              content:
                "Gelecekte, daha büyük ölçekli projelerde yer almayı ve özellikle full-stack geliştirme konusunda derinleşmeyi hedefliyorum. Web performansı, kullanıcı deneyimi ve modern JavaScript çerçeveleri üzerine daha fazla çalışmak istiyorum.",
            },
            {
              str: "Motivasyonum",
              content:
                "Web teknolojilerinin hızla değişmesi ve gelişmesi, sürekli olarak yeni şeyler öğrenmeme ilham veriyor. Teknolojiyi kullanarak gerçek hayattaki problemleri çözmeyi ve yenilikçi çözümler üretmeyi çok seviyorum.",
            },
          ],
        }}
        isOpen={activeAlert === 4}
        onClick={() => handleToggle(4)}
      />

      <AlertTool
        title="Eğitimlerim ve Sertifikalarım"
        contents={
          "Web geliştirme alanında kendimi sürekli eğitmeye devam ediyorum. Katıldığım kurslar ve aldığım sertifikalar, projelerde kullanmamı sağladığı araçlar açısından çok faydalı oldu."
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
        isOpen={activeAlert === 5}
        onClick={() => handleToggle(5)}
      />

      <AlertTool
        title="Nereden İlham Alıyorum?"
        contents={
          "Her gün yeni şeyler öğrenmek, problem çözmek ve teknolojiyi kullanarak insanların hayatlarını kolaylaştırmak benim en büyük motivasyonum."
        }
        list={{
          ul: [
            {
              str: "W3 Schools",
              content: "Web alanında verdiği bilgi kaynağı ve örnek projeler, bana ilham veriyor"
            },
            {
              str: "Fireship",
              content:
                "ingilizce, kaynaklar, yazılım haberler ve programlama dillerini hızlıca anattığı için kullanıyorum",
            },
            {
              str: "Terry Davis",
              content:
                "TempleOS kurucusu ve Holy C'in yapımcısı olan Terry Davis, bana ilham veriyor",
            },
            {
              str: "Brendan Eich",
              content:
                "Javascript, Netscape, Mozilla, Mozilla firefox ve Brave kurucusu, Brendan Eich, bana ilham veriyor",
            },
          ],
        }}
        isOpen={activeAlert === 6}
        onClick={() => handleToggle(6)}
      />

      <AlertTool
        title="İletişim"
        contents="Projelerim hakkında daha fazla bilgi almak ya da iş birliği yapmak isterseniz, bana ulaşmaktan çekinmeyin."
        buttons={[
          {
            name: "iletişim",
            link: "/contact",
          },
        ]}
        isOpen={activeAlert === 7}
        onClick={() => handleToggle(7)}
      />
    </div>
  );
};

export default AboutPage;
