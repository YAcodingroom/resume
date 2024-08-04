import { useEffect, useState } from "react";

function useFetchData(url, arrName) {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error("Something went wrong while fetching data");

        const data = await res.json();
        if (!data) throw new Error("Data not found");

        setDataArray(data[arrName]);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, [url, arrName]);

  return dataArray;
}

export { useFetchData };
