import { memo, useCallback, useMemo, useState } from "react";

interface Props {
  description: string;
  name: string;
}

const ProductDescription = memo((props: Props) => {
  const [detail, setDetail] = useState(false);

  const { description, name } = useMemo(() => props, [props]);

  const getDetail = useCallback(() => setDetail((e) => !e), []);

  return (
    <div className="bg-white w-full h-fit  flex flex-col gap-y-2">
      <p className="text-2xl font-bold">{name}</p>
      <div className="border-t py-2 flex gap-x-4">
        <button
          className={`buttonEffect pb-2 border-b-2 ${
            detail ? "border-white" : "border-green-500 text-green-600"
          }`}
          onClick={getDetail}
        >
          Description
        </button>
        <button
          className={`buttonEffect pb-2 border-b-2 ${
            detail ? "border-green-500 text-green-600" : "border-white"
          }`}
          onClick={getDetail}
        >
          More Product Info
        </button>
      </div>
      <div className="text-xs md:text-base">
        {detail ? (
          <>
            <p>A lot available size</p>
            <p>There somany color you can choose</p>
            <p>NextJS is the best React Framework</p>
            <p>OMG COOL!</p>
          </>
        ) : (
          description
        )}
      </div>
    </div>
  );
});

ProductDescription.displayName = "ProductDescription";
export default ProductDescription;
