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

  return (
    <Suspense fallback={<Loader />}>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
      >
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Suspense>
  );
}
