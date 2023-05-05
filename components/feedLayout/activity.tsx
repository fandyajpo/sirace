import { CreatePost } from "../../public/assets";

const Activity = () => {
  return (
    <div className="hidden md:hidden lg:block bg-white w-2/4 h-fit rounded-xl border border-gray-300">
      <div className="flex items-center gap-x-3 p-4 hover:bg-gray-200 rounded-xl">
        <CreatePost />
        <p>Create new post</p>
      </div>
    </div>
  );
};

export default Activity;
