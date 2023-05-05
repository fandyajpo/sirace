import { useCallback, useState, useContext, useMemo } from "react";
import { GlobalContext } from "../../lib/Context";
import { Transition } from "@headlessui/react";
import { X } from "../../public/assets";

import { useRouter } from "next/router";
import { Wishlist, NotWishlist } from "../../public/assets";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

const ProductTab = () => {
  const router = useRouter();
  console.log(router.query.id);
  const [itemSelection, setItemSelection] = useState(false);

  const animates = useSpring({
    from: {
      y: 0,
    },
    to: { y: itemSelection ? -40 : 0 },
  });

  const getItemSelect = useCallback(() => {
    setItemSelection((b) => !b);
  }, [itemSelection]);

  const { state, dispatch } = useContext(GlobalContext);
  const { wishlist, cart } = useMemo(() => state, [state.wishlist, state.cart]);

  const filterData = useMemo(
    () => state.product.filter((d: any) => d.id === router.query.id),
    [router.query.id]
  );

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

  const addToCard = useCallback(
    (d: any) => () => {
      // getItemSelect();
      if (itemSelection === true) {
        const concating = cart.concat(d);
        Promise.all([
          getItemSelect(),
          dispatch({
            type: "SET_CART",
            // @ts-ignored
            payload: {
              cart: concating,
            },
          }),
        ]);
      } else {
        getItemSelect();
      }
    },
    [cart, itemSelection]
  );

  return (
    <div className="lg:hidden">
      <div>
        <Transition
          className={`fixed z-20 inset-0`}
          show={itemSelection}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <div className="flex bg-black/50 z-10 md:bg-black/40 justify-center">
            <animated.div
              style={{
                ...animates,
              }}
              className="relative inline-block align-bottom rounded-t-lg text-left transform transition-all md:px-0 md:py-4 sm:align-middle w-full md:max-w-2xl lg:max-w-7xl"
            >
              <div className="bg-transparent w-full h-screen">
                <div
                  className={`bg-white w-full h-fit pb-24 fixed z-10 bottom-0 rounded-xl flex flex-col p-2 gap-y-2`}
                >
                  <div className="flex flex-row items-center justify-between">
                    <p>Varian Product</p>
                    <button
                      className="buttonEffect flex justify-end"
                      onClick={getItemSelect}
                    >
                      <X />
                    </button>
                  </div>
                  {/* <p className="text-black">{}</p> */}

                  <div className="flex flex-row gap-x-2">
                    <Image
                      className="rounded-xl w-32 h-32"
                      alt={`${router.query.id}`}
                      //@ts-ignored
                      src={filterData[0]?.image}
                      width={100}
                      height={100}
                    />
                    <div>
                      {/* @ts-ignored */}
                      <p className="text-md font-bold">{filterData[0]?.name}</p>
                      <p className="text-xs md:text-base">
                        {/* @ts-ignored */}
                        {filterData[0]?.description.substring(0, 150) + "..."}
                      </p>
                    </div>
                  </div>
                  <p>Choose your size {"(Unavailable)"}</p>
                  <div className="flex gap-x-2 overflow-x-scroll p-1">
                    {/* @ts-ignored */}

                    {filterData[0]?.sizes.length > 0 &&
                      //@ts-ignored
                      filterData[0]?.sizes.map((d, i) => {
                        return (
                          <div key={i} className="relative grayscale">
                            <input
                              disabled
                              className="sr-only peer"
                              type="radio"
                              value={d}
                              name="sizes"
                              id={d}
                            />
                            <label
                              className="flex p-2 w-24 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                              htmlFor={d}
                            >
                              {d}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  <p>Colour for you {"(Unavailable)"}</p>
                  <div className="flex gap-x-2 overflow-x-scroll p-1">
                    {/* @ts-ignored */}
                    {filterData[0]?.colors.length > 0 &&
                      //@ts-ignored
                      filterData[0]?.colors.map((c: any, i) => {
                        return (
                          <div key={i} className="relative grayscale">
                            <input
                              disabled
                              className="sr-only peer"
                              type="radio"
                              value={c.name}
                              name="color"
                              id={c.name}
                            />
                            <label
                              className="flex p-2 w-auto items-center gap-x-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                              htmlFor={c.name}
                            >
                              <div
                                className="w-6 h-6 rounded-md"
                                style={{
                                  backgroundColor: c.color_hash,
                                }}
                              />
                              <p className="text-xs md:text-base">{c.name}</p>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </Transition>
      </div>

      <div
        className={`flex bg-white backdrop-blur-md shadow-md fixed bottom-0 ${
          itemSelection ? "z-20" : "z-10"
        }  justify-center w-full items-center h-fit md:block lg:hidden border-t rounded-t-xl`}
      >
        <div className="flex justify-center items-center w-full">
          <div className="md:max-w-2xl lg:max-w-7xl h-16 w-full flex items-center justify-between shadow-sm gap-x-2 p-2">
            {/* @ts-ignored */}
            {itemChecker(filterData[0]?.id) ? (
              <button
                //@ts-ignored
                onClick={remove(filterData[0]?.id)}
                className="buttonEffect active:scale-90 duration-300 bg-white border border-gray-300 h-12 px-2  h-fullflex items-center justify-center rounded-xl font-bold text-green-500"
              >
                <Wishlist />
              </button>
            ) : (
              <button
                onClick={storeWishlish(filterData)}
                className="buttonEffect active:scale-90 duration-300 bg-white border border-gray-300 h-12 px-2  h-fullflex items-center justify-center rounded-xl font-bold text-green-500"
              >
                <NotWishlist />
              </button>
            )}
            <button
              className="buttonEffect active:scale-90 duration-300 bg-white border border-green-500 w-full h-12 rounded-xl font-bold text-green-500"
              onClick={() => alert("Maaf Transaksi belum tersedia")}
            >
              Beli Langsung
            </button>
            <button
              onClick={addToCard(filterData)}
              className="buttonEffect active:scale-90 duration-300  bg-green-500 font-bold text-white w-full h-12 rounded-xl"
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
