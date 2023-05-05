import Layout from "../../components/layout";
import Screen from "../../components/arch/screen";
import { Wishlist, NotWishlist } from "../../public/assets";
import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../../lib/Context";
const Search = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { wishlist } = useMemo(() => state, [state.wishlist]);
  const router = useRouter();
  const [searchs, setSearchs] = useState<any>([]);

  const getShowData = async () => {
    const getter = await fetch(`/api/searchPage?q=${router.query.q}`);
    const data = await getter.json();
    return setSearchs(data);
  };

  useEffect(() => {
    getShowData();
    console.log(router.query.q);
  }, [router.query]);

  const storeWishlish = useCallback(
    (a: any) => () => {
      const concating = wishlist.concat(a);
      dispatch({
        type: "SET_WISHLIST",
        //@ts-ignored
        payload: {
          wishlist: concating,
        },
      });
    },
    [wishlist]
  );

  const itemChecker = useCallback(
    (a: any) => {
      //@ts-ignored
      return wishlist.find((item) => item?.id === a);
    },
    [wishlist]
  );

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
    <div className="flex flex-col justify-center py-24 h-full bg-white">
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-auto flex flex-col md:flex-row grow flex-shrink-0 gap-4 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 grid-flow-row gap-4 w-full p-2 md:p-0">
            {searchs?.data?.length > 0 &&
              searchs?.data?.map((d: any, i: any) => {
                return (
                  <div
                    key={i}
                    className="p-2 border border-r-4 rounded-xl relative"
                  >
                    <Link
                      href={{
                        pathname: "/detail",
                        query: {
                          id: d.id,
                        },
                      }}
                      className="group full rounded-xl w-36 h-64 md:h-72 bg-white "
                    >
                      <Image
                        src={d.image}
                        alt="any"
                        width={100}
                        height={100}
                        className="h-36 w-36 group-hover:scale-95 duration-300 border rounded-xl border-gray-300 active:scale-100"
                      />
                      <div className="p-2">
                        <p>{d?.name}</p>
                        <p className="text-md font-bold">$ {d?.price}</p>
                      </div>
                    </Link>

                    <div className="flex justify-end">
                      {itemChecker(d?.id) ? (
                        <button
                          onClick={remove(d?.id)}
                          className="absolute bottom-2 right-2"
                        >
                          <Wishlist />
                        </button>
                      ) : (
                        <button
                          onClick={storeWishlish(d)}
                          className="absolute bottom-2 right-2"
                        >
                          <NotWishlist />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Screen>
    </div>
  );
};

Search.layout = Layout;
export default Search;
