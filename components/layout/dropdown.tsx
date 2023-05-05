import Link from "next/link";
import React, { SetStateAction, useCallback, useEffect, useRef } from "react";

interface State {
  open: boolean;
  setOpen: SetStateAction<any>;
}

const Dropdown = (props: State) => {
  const { open, setOpen } = props;

  const dropRef = useRef<any>();

  const openDropdown = useCallback(
    (r: boolean) => () => {
      setOpen(!r);
    },
    [open]
  );

  return (
    <div
      ref={dropRef}
      style={{
        height: open ? dropRef.current.scrollHeight : 0,
        opacity: open ? 1 : 0,
      }}
      className={`bg-white overflow-hidden w-44 duration-100 absolute rounded-xl border border-gray-300 -bottom-44 z-20 ease-in-out `}
    >
      <Link href={"/profile"} onClick={openDropdown(open)}>
        <p className="px-4 py-2">Profile</p>
      </Link>
      <Link href={"/profile"} onClick={openDropdown(open)}>
        <p className="px-4 py-2">Saved</p>
      </Link>
      <Link href={"/settings"} onClick={openDropdown(open)}>
        <p className="px-4 py-2">Settings</p>
      </Link>
      <Link href={"/profile"} onClick={openDropdown(open)}>
        <p className="px-4 py-2 border-t border-gray-300 text-red-500">
          Logout
        </p>
      </Link>
    </div>
  );
};

export default Dropdown;
