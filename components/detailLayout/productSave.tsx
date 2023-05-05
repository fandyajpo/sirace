import { Wishlist, Share, Chat, NotWishlist } from "../../public/assets";
import { useCallback, useContext, memo, useMemo } from "react";
import { GlobalContext } from "../../lib/Context";
import { useRouter } from "next/router";

interface Props {
  product: string[];
}

const ProductSave = (props: Props) => {
  const { product } = useMemo(() => props, [props.product]);
  const { state, dispatch } = useContext(GlobalContext);
  const { wishlist } = useMemo(() => state, [state.wishlist]);
  const router = useRouter();

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
    <div className="flex flex-row items-center gap-x-2 py-2 divide-x divide-gray-300">
      <div className="flex items-center gap-x-2 active:scale-90 duration-200">
        <Chat />
        <p>Chat</p>
      </div>
      <div className="flex items-center gap-x-2 px-2 active:scale-90 duration-200">
        {itemChecker(router.query.id) ? (
          <button
            onClick={remove(router.query.id)}
            className="flex items-center gap-x-2"
          >
            <Wishlist />
            <p>Wishlist</p>
          </button>
        ) : (
          <button
            onClick={storeWishlish(product)}
            className="flex items-center gap-x-2"
          >
            <NotWishlist />
            <p>Wishlist</p>
          </button>
        )}
        {/* <Wishlist /> */}
      </div>
      <div className="flex items-center gap-x-2 px-2 active:scale-90 duration-200">
        <Share />
        <p>Share</p>
      </div>
    </div>
  );
};

export default ProductSave;
