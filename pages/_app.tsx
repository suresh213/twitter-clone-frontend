import Loader from "@/components/Loader/Loader";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...pageProps} />
    </Suspense>
  );
}
