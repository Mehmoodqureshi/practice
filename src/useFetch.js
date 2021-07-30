import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [IsPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("hosla");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort;
  }, [url]);
  return { data, IsPending, error };
};

export default useFetch;
