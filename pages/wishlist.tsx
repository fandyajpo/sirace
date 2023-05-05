import Layout from "../components/layout";
import Screen from "../components/arch/screen";
import { useContext, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../lib/Context";
import ProductCard from "../components/arch/productCard";
const Search = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const router = useRouter();

  const { wishlist } = useMemo(() => state, [state.wishlist]);

  const remove = useCallback(
    (a: any) => () => {
      //@ts-ignored
      const filteredArray = wishlist.filter((item) => item.id !== a);

      dispatch({
        type: "SET_WISHLIST",
        //@ts-ignored
        payload: {
          wishlist: filteredArray,
        },
      });
    },
    [wishlist]
  );

  return (
    <div className="flex flex-col justify-center py-16 pb-44 md:py-24 h-full">
      <Screen>
        <div className="w-full h-full md:max-w-2xl lg:max-w-7xl flex flex-col  md:flex-col-reverse lg:flex-col items-stretch grow flex-shrink-0 gap-x-4">
          {wishlist?.length < 1 ? (
            <div className="max-h-max h-full w-full flex items-center justify-center pt-24">
              <p className="md:text-3xl font-bold">
                You dont have any wishlist item
              </p>
            </div>
          ) : null}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 grid-flow-row gap-4 w-full p-2 md:p-0">
            {wishlist?.length > 0
              ? wishlist?.map((d: any, i) => {
                  return (
                    <div
                      key={i}
                      className="p-2 border border-r-4 rounded-xl w-full "
                    >
                      <Link
                        href={{
                          pathname: "/detail",
                          query: {
                            id: d.id,
                          },
                        }}
                        className="group w-full rounded-xl"
                      >
                        <Image
                          src={d.image}
                          alt="any"
                          width={100}
                          height={100}
                          className="h-44 w-full group-hover:scale-95 duration-300 border rounded-xl border-gray-300 active:scale-100"
                        />
                        <div className="p-2">
                          <p>{d?.name}</p>
                        </div>
                      </Link>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-md font-bold">$ {d?.price}</p>
                        <button
                          onClick={remove(d?.id)}
                          className=" text-xs text-red-500 py-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Screen>
    </div>
  );
};

Search.layout = Layout;
export default Search;
