import { ArrowStore, DesktopUser, Feed } from "../../public/assets";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextJS from "../../public/next.svg";
const FeedNavigation = () => {
  const router = useRouter();
  const [side, setSide] = useState(false);

  const sSide = useCallback(() => {
    setSide((r) => !r);
  }, [side]);

  const goToProfile = useCallback(() => {
    Promise.all([sSide(), router.push("/account")]);
  }, []);
  const goToFeed = useCallback(() => {
    Promise.all([sSide(), router.push("/feed")]);
  }, []);
  const goToHome = useCallback(() => {
    Promise.all([sSide(), router.push("/")]);
  }, []);

  return (
    <div className="relative hidden overflow-hidden md:hidden lg:block xl:block">
      <div className="fixed items-center left-0 z-30 lg:flex xl:block">
        <div
          className={`${
            side ? "lg:w-44 xl:w-64" : "w-2"
          } h-screen bg-gradient-to-br from-blue-600 to-indigo-600 duration-500 overflow-hidden items-center flex flex-col  gap-y-2 p-2`}
        >
          {useMemo(() => {
            return (
              <button
                className={`buttonEffect p-4 rounded-full border-2 z-10 duration-500 border-blue-500 bg-white absolute ${
                  side
                    ? "-right-7 top-2 rotate-180"
                    : "top-96 -right-7 rotate-0"
                } overflow-hidden`}
                onClick={sSide}
              >
                <ArrowStore />
              </button>
            );
          }, [side])}

          {useMemo(() => {
            return (
              <div
                className={`overflow-hidden duration-500 z-0 flex w-full flex-col gap-y-2 ${
                  side ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="w-full border bg-white border-violet-500 shadow md:rounded-xl overflow-hidden">
                  <div className="flex flex-col w-full justify-center items-center gap-6 h-fit p-4">
                    <Image
                      src={NextJS}
                      alt="nextjs"
                      className="w-20 h-20 rounded-full border border-gray-300 p-2"
                    />
                    <div className="w-full text-center">
                      <p className="text-1xl font-bold">Fandy Next JS</p>
                      <div className="flex items-center justify-center gap-x-2">
                        <div className="bg-green-500 w-3 h-3 rounded-full" />
                        <p>Online</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={goToHome}
                  className={` w-full outline-none rounded-md p-2 overflow-hidden border flex items-center gap-x-4 hover:bg-white/50 duration-300 mt-2 ${
                    router.pathname === "/"
                      ? "text-white border border-white bg-white/50 shadow"
                      : "text-white border-transparent"
                  }`}
                  disabled={!side}
                >
                  <Feed />
                  <p className="text-xl text-white">Home</p>
                </button>
                <button
                  onClick={goToProfile}
                  className={`w-full outline-none rounded-md p-2 overflow-hidden border flex items-center gap-x-4 hover:bg-white/50 duration-300 mt-2  ${
                    router.pathname === "/account"
                      ? "text-white border-white bg-white/50 shadow"
                      : "text-white border-transparent"
                  }`}
                  disabled={!side}
                >
                  <DesktopUser />
                  <p className="text-xl text-white">Profile</p>
                </button>
                <button
                  onClick={goToFeed}
                  className={`w-full outline-none rounded-md p-2 overflow-hidden border flex items-center gap-x-4 hover:bg-white/50 duration-300 mt-2 ${
                    router.pathname === "/feed"
                      ? "text-white border border-white bg-white/50 shadow"
                      : "text-white border-transparent"
                  }`}
                  disabled={!side}
                >
                  <Feed />
                  <p className="text-xl text-white">Feed</p>
                </button>
              </div>
            );
          }, [side, router])}
        </div>
      </div>
    </div>
  );
};

export default FeedNavigation;
