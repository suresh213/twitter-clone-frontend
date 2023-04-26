import Loader from "@/components/Loader/Loader";
import { setToken } from "@/middleware/localStorageMiddleware";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Suspense, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setToken();
  }, []);

  console.log(process.env.NEXT_GOOGLE_CLIENT_ID);
  return (
    <Suspense fallback={<Loader />}>
      <GoogleOAuthProvider
        clientId={
          process.env.NEXT_GOOGLE_CLIENT_ID ||
          "72735544796-n509gprjg0lp1tlbsn7tuane0duanoho.apps.googleusercontent.com"
        }
      >
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Suspense>
  );
}
