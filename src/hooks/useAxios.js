// TOOLS
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useAxios = (url, filter) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getCountries = async () => {
    setIsPending(true);

    try {
      const res = await axios.get(url);
      if (!res) {
        throw new Error('Could not fetch the data');
      }

      if (filter) {
        const filtered = res.data.filter(data => data.region === filter);
        setData(filtered);
        setIsPending(false);
      } else {
        setData(res.data);
        setIsPending(false);
      }
    }

    catch (err) {
      console.log(err.message);
      setIsPending(false);
    }
  };

  // NO USING A CALLBACK => INFINITE LOOP
  const callback = useCallback(getCountries, [url, filter]);


  useEffect(() => {
    callback();
  }, [callback]);

  return { data, isPending };
};
