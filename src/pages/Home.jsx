import { useState } from "react";
import AlertTool from "../components/AlertTool";
import UseFetchData from "../hook/UseFetchData";
import Footer from "../components/Footer";

const Home = () => {
  const [activeAlert, setActiveAlert] = useState(null); // Hangi AlertTool'un açık olduğunu tutar

  const {
    data: reposData,
    loading: reposLoading,
    error: reposError,
  } = UseFetchData("Repos");

  const handleToggle = (index) => {
    setActiveAlert(activeAlert === index ? null : index);
  };

  const Repos = (reposData || []).filter((repo) => repo.started === true);

  return (
    <div className="gradient">
      <header className="image d-flex justify-content-center align-items-center">
        <h1 className="display-1">uzeyir-yariz</h1>
      </header>

      <main className="d-flex flex-column gap-5">
        <section className="container mt-4">
          <h2 className="text-center title my-4">Projeler</h2>

          <div className="card-group">
            {reposLoading ? (
              <div className="spinner-border text-primary" role="status"></div>
            ) : reposError ? (
              <pre> hata : {reposError} </pre>
            ) : (
              Repos.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img
                      className="card-img-top"
                      src={item.img_url}
                      alt={item.img_alt}
                    />
                  </div>
                );
              })
            )}
          </div>
          <a
            href="extra/projects"
            className="text-center btn btn-outline-primary w-100 mt-2"
          >
            daha fazla
          </a>
        </section>

        <section className="container mt-4">
          <h2 className="text-center title my-4">Hakkımda</h2>

          <AlertTool
            title="Hakkımda"
            contents={`
              Ben, web teknolojilerine tutku duyan bir geliştiriciyim. Web
              geliştirme projelerinde modern araçlar ve teknolojiler kullanarak, hem
              frontend hem de backend alanlarında kullanıcı dostu ve performanslı
              çözümler üretiyorum.`}
            isOpen={activeAlert === 0}
            buttons={[
              {
                name: "Projelerimi İncele",
                link: "extra/projects",
              },
              {
                name: "Benimle İletişime Geç",
                link: "/contact",
              },
              {
                name: "Daha fazla bilgi için",
                link: "/about",
              },
            ]}
            onClick={() => handleToggle(0)}
          />

          <AlertTool
            title="Ben Kimim ?"
            contents={[
              `Lise yıllarında web geliştirme ile tanıştım ve hızla HTML, CSS ve
          JavaScript gibi temel teknolojiler üzerinde uzmanlaştım. Ardından
          React ve Firebase gibi modern araçlarla projeler geliştirerek kendimi
          sürekli geliştirdim.`,
              `Bir web geliştirici olarak, hem frontend hem de backend alanlarında
          çalışıyorum. Kullanıcı deneyimini ön planda tutarak, performanslı ve
          ölçeklenebilir web uygulamaları geliştirmeyi amaçlıyorum.`,
            ]}
            isOpen={activeAlert === 1}
            onClick={() => handleToggle(1)} // Açık/kapalı durumu kontrol eder
          />

          <AlertTool
            title="Hangi Alanlarda Uzmanım?"
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
              content:
                "Web sitelerinin tasarımını oluşturmakla kalmıyor, aynı zamanda performans, güvenlik ve kullanıcı deneyimi odaklı backend altyapılarını da kuruyorum.",
            }}
            isOpen={activeAlert === 2}
            onClick={() => handleToggle(2)} // Açık/kapalı durumu kontrol eder
          />

          <a href="/about" className="btn w-100 btn-outline-primary">
            daha fazlası
          </a>
        </section>

        <section className="container">
          <h2 className="text-center title my-4">📃 Tüm sayfalar 📃</h2>

          <div className="row gap-4 justify-content-center">
            <a
              href="extra/games"
              className="col-lg-3 btn btn-outline-primary p-4 rounded-4"
            >
              Oyunlar
            </a>
            <a
              href="/about"
              className="col-lg-3 btn btn-outline-primary p-4 rounded-4"
            >
              Hakkımda
            </a>
            <a
              href="/contact"
              className="col-lg-3 btn btn-outline-primary p-4 rounded-4"
            >
              İletişim
            </a>
            <a
              href="/hub"
              className="col-lg-3 btn btn-outline-primary p-4 rounded-4"
            >
              Developer hub
            </a>
            <a
              href="extra/projects"
              className="col-lg-3 btn btn-outline-primary p-4 rounded-4"
            >
              Projeler
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
