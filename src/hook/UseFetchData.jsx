import { useEffect, useState } from "react";

const UseFetchData = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const url = "../../DataBase/main.json";

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const filteredData = data[category];

        if (!filteredData) {
          throw new Error("geçersiz kategori");
        }

        setData(filteredData);
        
      } catch (err) {
        setErr(err.mesage);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [url, category]);

  return { data, loading, err };
};

export default UseFetchData;
