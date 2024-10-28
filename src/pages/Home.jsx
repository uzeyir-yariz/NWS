// import Footer from "../components/Footer"

import UseFetchData from "../hook/UseFetchData";

const Home = () => {
  const {
    data: reposData,
    loading: reposLoading,
    error: reposError,
  } = UseFetchData("Repos");

  const Repos = (reposData || []).filter((repo) => repo.started === true);

  return (
    <div>
      <header className="image d-flex justify-content-center align-items-center">
        <h1 className="display-1">uzeyir-yariz</h1>
      </header>

      <main>
        <section className="container">
          <h2 className="text-center title my-4">⭐ Projeler ⭐</h2>

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
          <a href="" className="text-center btn btn-primary w-100 mt-2">
            daha fazla
          </a>
        </section>
      </main>

      {/* <Footer/> */}
    </div>
  );
};

export default Home;
