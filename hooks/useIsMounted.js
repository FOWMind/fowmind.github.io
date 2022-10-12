import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useIsMounted() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [router.isReady]);

  return loaded;
}
