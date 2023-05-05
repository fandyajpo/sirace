import Layout from "../components/layout";

import Screen from "../components/arch/screen";
import { ArrowStore } from "../public/assets";
import NextJS from "../public/next.svg";
import Image from "next/image";
import { useMemo } from "react";

const Settings = [
  {
    title: "General",
  },
  {
    title: "Notification",
  },
  {
    title: "Cart",
  },
  {
    title: "Wishlist",
  },
  {
    title: "Advanced",
  },
  {
    title: "Sign Out",
  },
];

const AccountConnection = [
  {
    title: "Fanvercel Account",
  },
  {
    title: "Gojek",
  },
  {
    title: "Google",
  },
  {
    title: "Phone",
  },
  {
    title: "Github",
  },
];

const Account = () => {
  const Set = useMemo(
    () =>
      Settings.map((a, i) => {
        return (
          <div
            key={i}
            className="w-full border border-gray-300 md:rounded-md flex text-gray-600 items-center px-4 text-base justify-between font-semibold h-16 hover:bg-gray-200 duration-200"
          >
            <p>{a.title}</p>
            <ArrowStore />
          </div>
        );
      }),
    []
  );

  const Aconnection = useMemo(
    () =>
      AccountConnection.map((a, i) => {
        return (
          <div
            key={i}
            className="w-full flex text-gray-600 items-center px-4 text-base justify-between font-semibold h-12 hover:bg-gray-200 duration-300"
          >
            <p>{a.title}</p>
            <ArrowStore />
          </div>
        );
      }),
    []
  );

  return (
    <div
      //   layoutId="navigate"
      className="flex flex-col justify-center py-16 md:py-24 h-full"
    >
      <Screen>
        <div className="bg-black w-full h-44 rounded-xl mb-4 hidden"></div>
        <div className="w-full h-full md:max-w-2xl lg:max-w-7xl flex flex-col md:flex-col lg:flex-row items-stretch grow flex-shrink-0 gap-4">
          <div className="w-full md:w-full lg:w-2/4 flex flex-col md:gap-y-2">
            <div className="w-full md:h-44 border border-gray-300 md:rounded-xl">
              <div className="flex flex-row items-center gap-x-4 h-32 p-4 border-b-4">
                <Image
                  src={NextJS}
                  alt="nextjs"
                  className="w-20 h-20 rounded-full border border-gray-300 p-2"
                />
                <div>
                  <p className="text-1xl font-bold">Sirace</p>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-green-500 w-3 h-3 rounded-full" />
                    <p>Online</p>
                  </div>
                </div>
              </div>
            </div>
            {Set}
          </div>
          <div className="w-full h-fit border border-gray-300 rounded-xl overflow-hidden hidden md:block">
            <div className="w-full h-auto bg-green-500 p-4 text-md font-bold text-white">
              Profile
            </div>
            <div className="p-4">
              <div className="flex gap-x-4 w-full">
                <div className="w-64 flex flex-col gap-y-2 relative">
                  <Image
                    src={NextJS}
                    alt="nextjs"
                    className="w-64 h-64 rounded-xl border border-gray-300 p-2"
                  />
                  <button className="border text-black border-gray-300 font-bold w-full rounded-xl h-10">
                    Choose Photo
                  </button>
                </div>
                <div className="w-80 flex flex-col">
                  <p className="text-black text-xl font-bold border-b py-2">
                    User Detail
                  </p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-x-4">
                      <p className=" text-black w-20">Username</p>
                      <p className=" text-black font-light ">: Sirace</p>
                    </div>
                    <button className="p-2 text-blue-500 hover:bg-blue-500/20 text-xs duration-300 rounded-full">
                      Update
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-x-4">
                      <p className=" text-black w-20">Birthday</p>
                      <p className=" text-gray-400 font-light ">: Not set</p>
                    </div>
                    <button className="p-2 text-blue-500 hover:bg-blue-500/20 text-xs duration-300 rounded-full">
                      Update
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-x-4">
                      <p className=" text-black w-20">Gender</p>
                      <p className=" text-gray-400 font-light ">: Not set</p>
                    </div>
                    <button className="p-2 text-blue-500 hover:bg-blue-500/20  text-xs duration-300 rounded-full">
                      Update
                    </button>
                  </div>
                  <p className="text-black text-xl font-bold border-b py-2">
                    Contact
                  </p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-x-4">
                      <p className=" text-black w-20">Phone</p>
                      <p className=" text-gray-400 font-light ">: Not set</p>
                    </div>
                    <button className="p-2 text-blue-500 hover:bg-blue-500/20  text-xs duration-300 rounded-full">
                      Update
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-x-4">
                      <p className=" text-black w-20">Email</p>
                      <p className=" text-gray-400 font-light ">: Not set</p>
                    </div>
                    <button className="p-2 text-blue-500 hover:bg-blue-500/20  text-xs duration-300 rounded-full">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/4 md:flex flex-col  border border-gray-300 h-fit rounded-xl hidden overflow-hidden">
            <div className="w-full h-auto bg-green-500 p-4 text-md font-bold text-white">
              Account Connection
            </div>
            <div>{Aconnection}</div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

Account.layout = Layout;
export default Account;
