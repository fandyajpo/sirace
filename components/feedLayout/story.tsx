const Storygram = [
  "Fanvercel",
  "Satryajay",
  "Junaedi",
  "Kokokrispy",
  "Dayumi",
  "Suta",
  "Dwijay",
  "Mr. Wisnu",
  "Arikusuma",
  "Surya",
  "Bonefasius",
  "Aura",
  "Andri",
  "Reza Arap",
  "Niki Minaj",
];

const Story = () => {
  return (
    <div className="bg-white max-w-7xl h-32 md:rounded-xl border border-gray-300 flex items-center gap-x-2 px-4 pt-2 overflow-scroll">
      {Storygram.map((a, i) => {
        return (
          <div key={i} className="flex flex-col items-center gap-y-2 ">
            <div className="p-1 bg-gradient-to-r from-pink-500 via-violet-500 to-orange-500 rounded-full">
              <div className="bg-gray-200 w-16 h-16 rounded-full border-2" />
            </div>
            <p className="text-xs">{a}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
