import Image from "next/image";
import { CommentInsta, LoveInsta, SaveInsta } from "../../public/assets";

const Posters = [
  {
    name: "Faouzia",
    title: "Dont use PHP",
    gif: "https://media.giphy.com/media/fEifgvmHVSQSetd8fU/giphy.gif",
  },
  {
    name: "Naruto Uzumaki",
    title: "Typescript Better than PHP",
    gif: "https://media.giphy.com/media/Nzz86dByLtYTS/giphy.gif",
  },
  {
    name: "Natebayo",
    title: "Play game with me",
    gif: "https://media.giphy.com/media/FrV6GuX6eQJFDVVu93/giphy.gif",
  },
];

const Poster = () => {
  return (
    <div className="flex flex-col w-full gap-y-2 md:gap-y-3">
      {Posters.map((a, i) => {
        return (
          <div
            key={i}
            className="bg-white max-w-7xl flex flex-col gap-y-4 py-4 md:p-4  max-h-7xl md:rounded-xl border-y md:border border-gray-300"
          >
            <div className=" flex items-center gap-x-4 justify-between px-2 md:px-0">
              <div className="flex flex-row items-center gap-x-2 ">
                <div className="w-14 h-14 rounded-full bg-gray-300" />
                <div>
                  <p className="font-bold ">{a.name}</p>
                  <p className="font-light">Bali</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <Image
              alt="Faouzia"
              src={a.gif}
              width={300}
              height={300}
              className="w-full h-96 md:rounded-xl"
            />
            <div className="px-2 md:px-0 flex flex-col gap-y-2">
              <div className="flex flex-row items-center gap-x-4">
                <CommentInsta /> <LoveInsta />
                <SaveInsta />
              </div>

              <p className="font-bold">{a.title}</p>
              <p className="text-xs">
                intiva.id Inilah kabar buruk dari industri teknologi dunia tahun
                ini 🥺 Selain karna faktor resesi global, menurut kamu
                penyebabnya apa lagi sih yg membuat harga saham perusahaan
                teknologi dapat turun drastis tahun ini? Kasih tau pendapat kamu
                di kolom komentar ya!! 👇👇
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Poster;
