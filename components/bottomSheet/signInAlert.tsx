import { Transition } from "@headlessui/react";
import {
  SetStateAction,
  Fragment,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { BackButton } from "../../public/assets";
interface Props {
  search: boolean;
  setSearch: SetStateAction<any>;
}

const Modal = (props: Props) => {
  const inputRef = useRef<any>();
  const { search, setSearch } = useMemo(() => props, [props]);

  const getSearch = useCallback(() => {
    setSearch(false);
  }, [search]);

  useEffect(() => {
    const mounted = setTimeout(() => {
      search ? inputRef.current.focus() : null;
    }, 100);

    return () => clearTimeout(mounted);
  }, [search]);
  return (
    <div>
      <Transition
        className={`fixed z-20 inset-0`}
        show={search}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <div className="flex bg-white md:bg-transparent justify-center">
          <button
            onClick={getSearch}
            className="buttonEffect hidden md:block bg-black/40 w-screen h-screen fixed cursor-default"
          />
          <Transition
            className="relative inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all p-3 md:px-0 md:py-4 sm:align-middle w-full md:max-w-2xl lg:max-w-7xl"
            show={search}
            role="dialog"
            aria-modal="true"
            enter="transition ease-out"
            enterFrom="transform opacity-0 scale-50"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-transparent w-full md:h-auto h-screen">
              <div className="flex flex-row items-center w-full relative">
                <button
                  onClick={getSearch}
                  className="buttonEffect h-6 w-6 md:hidden"
                >
                  <BackButton />
                </button>
                <input
                  ref={inputRef}
                  className="rounded-2xl h-10 md:h-12 pr-4 outline-none bg-white w-11/12 md:w-full mx-2 border-green-500 border-2 px-4 text-xs"
                  placeholder="Cari di Sirace"
                />
              </div>
              <div className="bg-white mt-2 rounded-xl mx-2">
                <div className="py-2">Recently search</div>
                <div className="text-gray-500">
                  <p className="border-b py-1">Celana dalam wanita</p>
                  <p className="border-b py-1">Tongkat baseball</p>
                  <p className="border-b py-1">Cangkir teh</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  );
};

export default Modal;
