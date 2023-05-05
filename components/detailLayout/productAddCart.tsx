import { memo, useMemo, useCallback, useContext } from "react";
import { GlobalContext } from "../../lib/Context";

interface Props {
  price: number;
  product: string[];
}

const ProductAddCart = memo((props: Props) => {
  const { price, product } = useMemo(() => props, [props]);
  const { state, dispatch } = useContext(GlobalContext);
  const { cart } = useMemo(() => state, [state.cart]);

  const addToCard = useCallback(
    (d: any) => () => {
      const concating = cart.concat(d);

      dispatch({
        type: "SET_CART",
        // @ts-ignored
        payload: {
          cart: concating,
        },
      });
    },
    [cart]
  );

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between py-3">
        <p className="text-base font-light">Price :</p>
        <p className="text-xl font-bold">$ {price}</p>
      </div>
      <button
        onClick={addToCard(product)}
        className="bg-green-500 rounded-xl w-full h-10 text-bold text-white duration-300 active:scale-90"
      >
        + Keranjang
      </button>
      <button
        onClick={() => alert("Transaksi tidak tersedia")}
        className="bg-white border border-green-500 rounded-xl w-full h-10 text-bold text-green-500 duration-300 active:scale-90"
      >
        Beli
      </button>
    </div>
  );
});

ProductAddCart.displayName = "ProductAddCart";
export default ProductAddCart;
