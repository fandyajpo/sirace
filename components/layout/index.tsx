import Navbar from "./navbar";
import Header from "./header";
import { ChildrenInterface } from "../../types/Children";
import BottomTab from "../m/bottomTab";
import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";
import ProductTab from "../m/productTab";
import { useContext, useEffect, useLayoutEffect } from "react";
import { GlobalContext } from "../../lib/Context";
import Footer from "./footer";
import FeedNavigation from "./feedNavigation";

const Layout = ({ children }: ChildrenInterface) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { product, login } = useMemo(() => state, [state.product, state.login]);
  useEffect(() => {
    async function Getter() {
      console.log("fetch again");
      const fetcher = await fetch("/api/hello");
      const data = await fetcher.json();
      return dispatch({
        type: "SET_PRODUCT",
        //@ts-ignored
        payload: { product: data.shoes },
      });
    }
    if (product?.length < 1) {
      Getter();
    }
  }, [state.product]);

  const router = useRouter();

  const RouterManager = useMemo(() => {
    if (router.pathname === "/detail") return <ProductTab />;
    if (
      router.pathname === "/" ||
      router.pathname === "/feed" ||
      router.pathname === "/wishlist" ||
      router.pathname === "/transaction"
    ) {
      return <BottomTab />;
    }
    return null;
  }, [router]);

  const FooterManager = useMemo(() => {
    if (router.pathname !== "/feed")
      return (
        <div className="w-full h-full">
          <Footer />
        </div>
      );
  }, [router]);

  useEffect(() => {
    console.log("render");
    const isLogin = () => {
      if (login === false) return router.push("/");
    };
    isLogin();
  }, [login]);

  return (
    <>
      <div className="h-full w-full flex flex-col justify-between relative">
        {useMemo(() => {
          return <FeedNavigation />;
        }, [])}
        <div className="w-full h-full">
          <Navbar />
          <main className="flex justify-center bg-white w-full h-full">
            {children}
          </main>
        </div>
        {FooterManager}
      </div>
      <div>{RouterManager}</div>
    </>
  );
};

export default Layout;
