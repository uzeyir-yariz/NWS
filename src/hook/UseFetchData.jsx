import axios from "axios";
import { useEffect, useState } from "react";
import { nws_access_key, nws_data_url, nws_master_key } from "../varibles";



const UseFetchData = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const url = `https://api.jsonbin.io/v3/b/${nws_data_url}`;

  console.log(nws_data_url)

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
              "X-Master-Key": nws_master_key,
              "X-Access-Key": nws_access_key
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
