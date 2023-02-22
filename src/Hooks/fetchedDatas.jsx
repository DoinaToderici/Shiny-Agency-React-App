import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setisLoading(false);
      });
  }, [url]);

  return { data, isLoading };
}

export default useFetch;
