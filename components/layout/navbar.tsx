import { motion } from "framer-motion";

import Search from "./search";
import Link from "next/link";
import {
  SearchIcon,
  CartButton,
  DirectMessage,
  MainSvg,
  HomeWishlist,
  LeftArrow,
} from "../../public/assets";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../lib/Context";
const Navbar = () => {
  const [search, setSearch] = useState<boolean>(false);
  const getSearch = useCallback(() => {
    setSearch(true);
  }, [search]);

  const { state } = useContext(GlobalContext);
  const { cart, wishlist } = useMemo(() => state, [state.wishlist, state.cart]);
  const router = useRouter();

  const RouteBack = useMemo(() => {
    if (
      router.pathname === "/" ||
      router.pathname === "/wishlist" ||
      router.pathname === "/feed" ||
      router.pathname === "/transaction"
    ) {
      return null;
    } else {
      return (
        <button
          onClick={() => router.back()}
          className="buttonEffect pl-2 lg:hidden"
        >
          <LeftArrow />
        </button>
      );
    }
  }, [router]);

  return (
    <>
      <div
        className={`flex bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-20 justify-center w-full items-center h-fit`}
      >
        <Search search={search} setSearch={setSearch} />
        <div className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl duration-1000 h-16 md:h-20 flex justify-center items-center  shadow-sm gap-x-2 px-2">
          <motion.div
            layoutId="mishop"
            className="w-1/5 h-20 grow items-center hidden md:hidden lg:flex"
          >
            <Link href={"/"}>
              <p className="text-gray-800 font-extrabold text-2xl">Sirace</p>
            </Link>
          </motion.div>
          {RouteBack}
          <button
            onClick={getSearch}
            className="buttonEffect w-full md:w-full h-10 flex justify-center items-center relative cursor-text"
          >
            <div className="absolute left-2">
              <SearchIcon />
            </div>
            <p className="absolute text-xs text-gray-600 left-10">
              {router.query.q || "Cari di Sirace..."}
            </p>
            <div className="w-full rounded-2xl h-10 md:h-12 outline-none bg-gray-100 border border-gray-300 shadow-sm" />
          </button>
          <div
            className={`w-auto h-20 grow flex items-center justify-end gap-x-2`}
          >
            <Link href={"/wishlist"} className="buttonEffect">
              <div
                className={`${
                  router.pathname === "/wishlist" ? "bg-blue-500" : "bg-white"
                } duration-300 bg-white w-10 h-10 rounded-full justify-center items-center md:hidden border border-blue-600 hidden lg:flex active:scale-95 relative`}
              >
                {wishlist?.length > 0 ? (
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white border -right-2 -top-2 absolute flex justify-center items-center">
                    {state.wishlist.length}
                  </div>
                ) : null}
                <HomeWishlist
                  color={router.pathname === "/wishlist" ? "white" : "black"}
                />
              </div>
            </Link>
            <Link href={"/cart"} className="buttonEffect">
              <div
                className={`${
                  router.pathname === "/cart" ? "bg-blue-500" : "bg-white"
                } duration-300 w-10 h-10 rounded-full justify-center items-center flex border border-blue-600 active:scale-95 relative`}
              >
                {cart?.length > 0 ? (
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white border -right-2 -top-2 absolute flex justify-center items-center">
                    {state.cart.length}
                  </div>
                ) : null}

                <CartButton
                  color={router.pathname === "/cart" ? "white" : "black"}
                />
              </div>
            </Link>
            <Link href={"/mail"} className="buttonEffect">
              <div
                className={` ${
                  router.pathname === "/mail" ? "bg-blue-500" : "bg-white"
                } duration-300 bg-white w-10 h-10 rounded-full justify-center items-center flex border border-blue-600 active:scale-95`}
              >
                <MainSvg
                  color={router.pathname === "/mail" ? "white" : "black"}
                />
              </div>
            </Link>

            {router.pathname === "/feed" ? (
              <Link href={"/feed"} className="buttonEffect">
                <motion.div
                  className={`lg:hidden ${
                    router.pathname === "/feed" ? "bg-blue-500" : "bg-white"
                  } duration-300 bg-white w-10 h-10 rounded-full justify-center items-center flex border border-blue-600 active:scale-95`}
                >
                  <DirectMessage
                    color={router.pathname === "/feed" ? "white" : "black"}
                  />
                </motion.div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
