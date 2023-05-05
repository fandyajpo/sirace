import Image from "next/image";
import { memo, useMemo } from "react";
interface Props {
  image: any;
}

const ProductImage = memo((props: Props) => {
  const { image } = useMemo(() => props, [props]);
  return (
    <div className={"relative"}>
      <Image
        src={image}
        alt="any"
        width={100}
        height={100}
        className="w-44 group-hover:scale-110 duration-300 rounded-xl border border-gray-300"
      />
    </div>
  );
});

ProductImage.displayName = "ProductImage";
export default ProductImage;
