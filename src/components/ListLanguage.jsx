import { Languages } from "../data/Language";
import Language from "./Language";

const ListLanguage = () => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Yazılım Adı</th>
          <th scope="col">Beceri Seviyesi</th>
        </tr>
      </thead>
      <tbody>
        {Languages.map((item, index) => {
          return <Language key={index} {...item} />;
        })}
      </tbody>
    </table>
  );
};

export default ListLanguage;
