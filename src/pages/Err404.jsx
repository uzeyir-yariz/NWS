import { Link } from "react-router-dom";

const Err404 = () => {
  return (
    <div className="content">
      <h2 className="fs-1 text-bg-danger p-4">#404 aradığınız sayfa bulunamadı</h2>
      <Link to="/" className="fs-2 p-4">ana sayfaya geri dön</Link>
    </div>
  );
};

export default Err404;
