import { useMemo } from "react";
interface Title {
  title: string;
}

const ProductCardTitle = (props: Title) => {
  const { title } = useMemo(() => props, [props]);
  return (
    <p className="text-black font-bold text-base md:text-xl border-t-2 pt-4 px-4">
      {title}
    </p>
  );
};

export default ProductCardTitle;
