import Languages from "./components/Languages";
import RepoCard from "./components/RepoCard"

import JavaScriptImg from "./images/JavaScript-görsel.jpg"
import NWSImg from "./images/NWS-görsel.jpg"
import ReactImg from "./images/react-görsel.jpg"


const SecondPage = () => {

  const languages = [
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5", width: "100", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3", width: "100", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap", width: "90", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript", width: "80", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", width: "70", status: "warning"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript", width: "60", status: "warning"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js", width: "50", status: "danger"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", width: "90", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code", width: "100", status: "success"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase", width: "50", status: "danger"},
    {img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma", width: "100", status: "success"}
  ];

  const Repos = [
    {
      img_url: NWSImg,
      img_alt: "NWS görsel",
      title: "NWS",
      desc: "NWS (Next Web Solution) adlı proje web sitelerini bir sonraki aşamaya taşımak için kullanılan bir araç projesidir.",
      badge_languages: ["HTML", "React", "CSS", "Bootstrap", "Firebase"],
      Links: [
        { link_url: "https://github.com/uzeyir-yariz/NWS", link_name: "GitHub" }
      ]
    },
    {
      img_url: JavaScriptImg,
      img_alt: "JavaScript Kursu",
      title: "JavaScript Kursu görsel",
      desc: "Bu projede, JavaScript ile çeşitli projeler geliştirilmiştir. Proje, kapsamlı bir kurs takip edilerek adım adım gerçekleştirilmiş ve her bir proje, ilgili dosyalara özenle aktarılmıştır.",
      badge_languages: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      Links: [
        { link_url: "https://github.com/uzeyir-yariz/javascript", link_name: "GitHub" },
        { link_url: "https://www.udemy.com/course/javascript-egitimi/?couponCode=OF83024E", link_name: "Kurs" },
        { link_url: "https://github.com/uzeyir-yariz/javascript/blob/main/belge.pdf", link_name: "Sertifika" }
      ]
    },
    {
      img_url: ReactImg,
      title: "React Kursu",
      img_alt: "React kursu görsel",
      desc: "React ile geliştirilmiş projelerin adım adım dosyalara eklendiği bu kurs projesi, modern web geliştirme süreçlerini anlamanızı sağlayacak kapsamlı bir çalışma sunar. Her proje, React'in temel ve ileri düzey özelliklerini uygulamalı olarak öğrenmenize yardımcı olur.",
      badge_languages: ["React", "Axios", "Node.js", "JSX", "TSX"],
      Links: [
        { link_url: "https://github.com/uzeyir-yariz/React", link_name: "GitHub" },
        { link_url: "https://www.udemy.com/course/react-egitimi/?couponCode=OF83024E", link_name: "Kurs" }
      ]
    }
  ]

  return (
    <div className="content">
      <h1 className="text-center alert spe_font">uzeyir-yariz</h1>
      <div className="container">

        <h2 className="title my-4">⭐ Projeler ⭐</h2>
        <div className="card-group">
          {
            Repos.map((item, index) => {
              return <RepoCard key={index} {...item} />
            })
          }
        </div>

        <hr className="my-5" />

        <h2 className="title my-4">🚀 İstatislikler 🚀</h2>
        <h3>ziyaretçiler : <img src="https://profile-counter.glitch.me/uzeyir-yariz/count.svg?" /></h3>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <img className="w-100" src="https://github-readme-stats.vercel.app/api?username=uzeyir-yariz&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=codeSTACKr&locale=en&hide_border=false&order=1" alt="stats graph" />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img className="w-100" src="https://github-readme-stats.vercel.app/api/top-langs?username=uzeyir-yariz&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=6&theme=codeSTACKr&hide_border=false&order=2" alt="languages graph" />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img className="w-100" src="https://streak-stats.demolab.com?user=uzeyir-yariz&locale=en&mode=daily&theme=codeSTACKr&hide_border=false&border_radius=5&order=3" alt="streak graph" />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 alig-items-center my-4">
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=uzeyir-yariz&radius=16&theme=react&area=true&order=5" width="100%" alt="activity-graph graph" />
        </div>

        <hr className="my-5" />

        <h2 className="title my-4">🧰 Programlar 🧰</h2>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Yazılım Adı</th>
              <th scope="col">Beceri Seviyesi</th>
            </tr>
          </thead>
          <tbody>
            {
              languages.map((item, index) => {
                return <Languages key={index} {...item} />
              })
            }
          </tbody>
        </table>

        <h2 className="title my-4 text-center">📧 İletişim 📧</h2>
        <div style={{marginBottom: "8rem"}} className="gap-4 d-flex flex-wrap justify-content-center">
          <a href="uzeyiryariz13@gmail.com" target="_blank">
            <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="45" alt="gmail logo"  />
          </a>
          <a href="https://www.linkedin.com/in/%C3%BCzeyir-yariz-aa2722259/" target="_blank">
            <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="45" alt="linkedin logo"  />
          </a>
          <a href="https://www.instagram.com/uzeyiryariz/" target="_blank">
            <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="45" alt="instagram logo"  />
          </a>
          <a href="https://dev.to/uzeyir-yariz" target="_blank">
            <img src="https://img.shields.io/static/v1?message=dev.to&logo=dev.to&label=&color=0A0A0A&logoColor=white&labelColor=&style=for-the-badge" height="45" alt="devto logo"  />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
