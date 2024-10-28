import UseFetchData from "../../hook/UseFetchData";
import Languages from "./components/Languages";
import RepoCard from "./components/RepoCard";

const DeveloperHub = () => {
  const {
    data: languagesData,
    loading: languagesLoading,
    error: languagesError,
  } = UseFetchData("languages");

  const {
    data: reposData,
    loading: reposLoading,
    error: reposError,
  } = UseFetchData("Repos");

  const languages = languagesData || [];
  const Repos = (reposData || []).filter(repo => repo.started === true);

  return (
    <div className="content">
      <h1 className="text-center alert spe_font">uzeyir-yariz</h1>
      <div className="container">
        <h2 className="title my-4">⭐ Projeler ⭐</h2>
        <div className="card-group">
          {reposLoading ? (
            <div className="spinner-border text-primary" role="status"></div>
          ) : reposError ? (
            <pre> hata : {reposError} </pre>
          ) : (
            Repos.map((item, index) => {
              return <RepoCard key={index} {...item} />;
            })
          )}
        </div>

        <hr className="my-5" />

        <h2 className="title my-4">🚀 İstatislikler 🚀</h2>
        <h3>
          ziyaretçiler :{" "}
          <img src="https://profile-counter.glitch.me/uzeyir-yariz/count.svg?" />
        </h3>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <img
              className="w-100"
              src="https://github-readme-stats.vercel.app/api?username=uzeyir-yariz&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=codeSTACKr&locale=en&hide_border=false&order=1"
              alt="stats graph"
            />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img
              className="w-100"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=uzeyir-yariz&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=6&theme=codeSTACKr&hide_border=false&order=2"
              alt="languages graph"
            />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img
              className="w-100"
              src="https://streak-stats.demolab.com?user=uzeyir-yariz&locale=en&mode=daily&theme=codeSTACKr&hide_border=false&border_radius=5&order=3"
              alt="streak graph"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 alig-items-center my-4">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=uzeyir-yariz&radius=16&theme=react&area=true&order=5"
            width="100%"
            alt="activity-graph graph"
          />
        </div>

        <hr className="my-5" />

        <h2 className="title my-4">🧰 Programlar 🧰</h2>

        {languagesLoading ? (
          <pre>yükleniyor</pre>
        ) : languagesError ? (
          <pre>hata {languagesError} </pre>
        ) : (
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Yazılım Adı</th>
                <th scope="col">Beceri Seviyesi</th>
              </tr>
            </thead>
            <tbody>
              {languages.map((item, index) => {
                return <Languages key={index} {...item} />;
              })}
            </tbody>
          </table>
        )}

        <h2 className="title my-4 text-center">📧 İletişim 📧</h2>
        <div
          style={{ marginBottom: "8rem" }}
          className="gap-4 d-flex flex-wrap justify-content-center"
        >
          <a href="mailto:uzeyiryariz13@gmail.com" target="_blank">
            <img
              src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge"
              height="45"
              alt="gmail logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%BCzeyir-yariz-aa2722259/"
            target="_blank"
          >
            <img
              src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge"
              height="45"
              alt="linkedin logo"
            />
          </a>
          <a href="https://www.instagram.com/uzeyiryariz/" target="_blank">
            <img
              src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge"
              height="45"
              alt="instagram logo"
            />
          </a>
          <a href="https://dev.to/uzeyir-yariz" target="_blank">
            <img
              src="https://img.shields.io/static/v1?message=dev.to&logo=dev.to&label=&color=0A0A0A&logoColor=white&labelColor=&style=for-the-badge"
              height="45"
              alt="devto logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperHub;
