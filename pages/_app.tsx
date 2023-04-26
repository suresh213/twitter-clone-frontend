import Loader from "@/components/Loader/Loader";
import { setToken } from "@/middleware/localStorageMiddleware";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Suspense, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setToken();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Component {...pageProps} />
    </Suspense>
  );
}
