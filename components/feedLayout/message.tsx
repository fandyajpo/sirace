const Message = () => {
  return (
    <div className="hidden md:hidden bg-white w-5/6 h-fit lg:flex flex-col gap-y-3 border rounded-xl border-gray-300 p-4">
      <div className="py-3 flex justify-between">
        <p className="text-xl font-bold text-gray-800">Messages</p>
        <button className="text-xs px-4 py-1 rounded-full text-blue-600 bg-blue-500/20">
          See all
        </button>
      </div>
      <div className="flex justify-between items-center border-b">
        <div className="flex items-center gap-x-4">
          <button className="border-b-2 border-gray-800">
            <p className="font-bold pb-2 text-gray-700">Primary</p>
          </button>
          <button>
            <p className="border-b-2 border-white pb-2 font-light text-gray-800">
              General
            </p>
          </button>
        </div>
        <button>
          <p className="border-b-2 border-white text-violet-500 pb-2">
            Requests {"(2)"}
          </p>
        </button>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Kimberly</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
          <div>
            <p className="text-base font-semibold">Jennifer</p>
            <p className="text-xs text-gray-400">Active 1m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
