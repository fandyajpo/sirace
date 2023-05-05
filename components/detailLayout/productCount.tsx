import { useState, useCallback, memo } from "react";
import { AddNoteButton } from "../../public/assets";

const ProductCount = memo(() => {
  const [much, setMuch] = useState<number>(1);
  const [note, setNote] = useState(false);

  const Add = useCallback(() => setMuch((e: number) => e + 1), []);
  const Dec = useCallback(() => setMuch((e: number) => e - 1), []);

  const AddNote = useCallback(() => setNote((e: boolean) => !e), []);
  return (
    <>
      <p className="text-base font-semibold pb-2">Set amount dude!</p>
      <div className="flex items-center p-2 border w-fit rounded-xl gap-x-6">
        <button
          disabled={much === 1}
          onClick={Dec}
          className={`${
            much === 1 ? "bg-gray-300" : "bg-green-500"
          } w-6 h-6 flex items-center duration-300 active:scale-90 justify-center text-white rounded-md text-xl font-bold `}
        >
          -
        </button>
        <p>{much}</p>
        <button
          onClick={Add}
          className="bg-green-500 w-6 h-6 flex duration-300 active:scale-90 items-center justify-center text-white rounded-md text-xl font-bold"
        >
          +
        </button>
      </div>
      <div className="pt-2">
        {note ? (
          <input
            className="p-2 border border-gray-300 rounded-xl outline-none focus:border-green-500 duration-300"
            placeholder="eg. Pink color pls..."
          />
        ) : null}
      </div>
      <button
        onClick={AddNote}
        className="flex items-center p-2 w-fit rounded-xl gap-x-2"
      >
        {note ? (
          <p className="text-green-500 font-semibold text-xs">
            Batalkan Catatan
          </p>
        ) : (
          <>
            <AddNoteButton />
            <p className="text-green-500 font-semibold text-xs">
              Tambah Catatan
            </p>
          </>
        )}
      </button>
    </>
  );
});

ProductCount.displayName = "ProductCount";
export default ProductCount;
