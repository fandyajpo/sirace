const Bayar = [
  {
    name: "Subscription",
  },
  {
    name: "Travel Ticket",
  },
  {
    name: "Stylesheet",
  },

  {
    name: "Programming",
  },
  {
    name: "Hobbies",
  },
  {
    name: "Music",
  },
  {
    name: "Electronic",
  },
  {
    name: "Apartment",
  },
  {
    name: "Industry",
  },
  {
    name: "Animal Lover",
  },
  {
    name: "Beauty",
  },
];

const Category = () => {
  return (
    <div className="flex md:flex-col gap-y-4 flex-col-reverse overflow-x-scroll">
      <div className="flex flex-row items-center gap-0 md:gap-4 px-4 md:px-0 w-full  flex-none gap-x-4">
        {Bayar.map((a, i) => {
          return (
            <div
              key={i}
              className="bg-gray-200 border border-gray-300 shadow w-fit flex items-center justify-center px-4 h-10 flex-none rounded-xl"
            >
              {a.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
