import { useEffect, useState } from "react";

export default function useUrl() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return url;
}
