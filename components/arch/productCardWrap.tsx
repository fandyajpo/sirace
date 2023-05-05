import { memo, useMemo } from "react";
import ProductCard from "./productCard";

interface Props {
  data: string[];
}

const ProductCardWrap = memo((props: Props) => {
  const { data } = useMemo(() => props, [props]);
  return (
    <div className="w-full h-fit overflow-hidden md:rounded-xl relative">
      <div
        className={`bg-gradient-to-br from-green-600 to-green-700 w-44 md:w-64 h-full absolute left-0 z-10 duration-1000 rounded-r-xl md:rounded-xl shadow-md `}
      ></div>
      <div className="product w-full h-72 md:h-80 flex-row flex items-center overflow-auto gap-x-2 pl-14 md:pl-36 pr-4">
        {data.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </div>
    </div>
  );
});

ProductCardWrap.displayName = "ProductCardWrap";
export default ProductCardWrap;
