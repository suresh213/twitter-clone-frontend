/* eslint-disable react/display-name */
// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getToken } from "./localStorageMiddleware";

const withAuth = (Component: any) => {
  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      getToken() ? setVerified(true) : Router.replace("/");
    }, []);

    if (verified) return <Component {...props} />;
    return null;
  };
};

export default withAuth;
