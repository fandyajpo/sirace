import ProductCount from "./productCount";
import ProductAddCart from "./productAddCart";
import ProductSave from "./productSave";
import { memo, useMemo } from "react";

interface Props {
  price: number;
  product: any;
  color: string[];
  size: string[];
}

const ProductOrder = memo((props: Props) => {
  const { price, product, color, size } = useMemo(() => props, [props]);
  return (
    <div className="border border-gray-300 rounded-xl p-4 w-80 h-fit hidden md:hidden lg:block flex-col justify-between gap-y-2 ">
      <ProductCount />
      <p className="py-2">- Choose Color dude</p>
      <div className="flex flex-row items-center overflow-y-scroll gap-x-2">
        {color?.length > 0 &&
          color.map((s: any, i) => {
            return (
              <div key={i} className="flex-none border w-fit rounded-md">
                <div className="flex items-center p-2 gap-x-2">
                  <div
                    className="w-4 h-4 rounded-md"
                    style={{ backgroundColor: s?.color_hash }}
                  />
                  {s?.name} {s?.color_hash}
                </div>
              </div>
            );
          })}
      </div>
      <p className="py-2">- Choose Size</p>
      <div className="flex flex-row items-center overflow-y-scroll gap-x-2">
        {size?.length > 0 &&
          size.map((s: any, i) => {
            return (
              <div key={i} className="flex-none border w-fit rounded-md">
                <div className="flex items-center p-2 gap-x-2">{s}</div>
              </div>
            );
          })}
      </div>
      <ProductAddCart price={price} product={product} />
      <ProductSave product={product} />
    </div>
  );
});

ProductOrder.displayName = "ProductOrder";
export default ProductOrder;
