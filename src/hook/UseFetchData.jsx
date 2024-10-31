import axios from "axios";
import { useEffect, useState } from "react";

const UseFetchData = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const url = `https://api.jsonbin.io/v3/b/6723c235ad19ca34f8c1be2c`;

  useEffect(() => {
    const FetchData = async () => {
      try {
        const localData = localStorage.getItem(category);
        
        if (localData) {
          setData(JSON.parse(localData));
          setLoading(false);
        } else {
          const response = await axios.get(url, {
            headers: {
              "X-Master-Key": import.meta.env.VERCEL_NWS_DATA_MASTER_KEY,
              "X-Access-Key": import.meta.env.VERCEL_NWS_DATA_ACCESS_KEY
            }
          });

          const filteredData = response.data.record[category];

          if (!filteredData) {
            throw new Error("Geçersiz kategori");
          }

          // Veriyi state ve localStorage'e kaydet
          setData(filteredData);
          localStorage.setItem(category, JSON.stringify(filteredData));
        }
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, [url, category]);

  return { data, loading, err };
};

export default UseFetchData;
