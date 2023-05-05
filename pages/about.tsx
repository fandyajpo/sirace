import Image from "next/image";
import Layout from "../components/layout";
import NextJS from "../public/next.svg";
const about = [
  {
    title: "NextJS",
    description:
      "Saya pakai nextjs untuk mempercepat dan memudahkan sewaktu manage state di ReactJS, di react tuh kita dibebasin nganu nganu apapun",
  },
  {
    title: "React Hook",
    description:
      "NextJS yang base-nya React pasti ada React Hook didalamnya, untuk management state, manage input, manage kondisi seperti 'animated_style' dan yang paling dibutuhkan di ecommerce menurut saya itu GlobalState seperti Reat Context, Reducer dan React Redux",
  },
  {
    title: "React Component",
    description:
      "Disini saya develop dengan cara mengelompokkan semua component lalu di gabung jadi 1",
    image:
      "https://cdn.discordapp.com/attachments/1055060226858029076/1055274493775446116/Screenshot_from_2022-12-22_08-02-40.png",
  },
  {
    title: "Typescript",
    description:
      "Saat ini saya sedang migrasi dari Javascript ke Typescript agar lebih save daripada Javascript yang bisa nerima apapun data type, di TS kita harus membuat interface dulu sebelum declarasi variable. Di react, kalo share props ke component lain harus buat interface di component yang nerima props",
  },
  {
    title: "API",
    description:
      "Item ini semua adalah data json yang saya ambil dari API orang lain lalu datanya saya simpat di local file project ini",
    image:
      "https://cdn.discordapp.com/attachments/1055060226858029076/1055276567787475074/Screenshot_from_2022-12-22_08-12-10.png",
  },
  {
    title: "TailwindCSS",
    description:
      "Kenapa saya tetep pilih tailwind sebagai CSS Framework, karena untuk styling di tailwind itu inline dan udah dipermudah sama yang develop TailwindCSS ini. ya kali kita ke style.css terus ambil class dan styling di beda file. Penggunaan tailwind juga ga perlu sih semisal Softwarenya kecil atau ga besar banget kaya contohnya company profile yang static.",
  },
];

const ref = [
  "NextJS",
  "KoaJS",
  "ExpressJS",
  "NodeJS",
  "Firebase",
  "ArangoDB",
  "ReactJS",
  "React Native",
  "Go",
  "MongoDB",
  "Typescript",
  "Javascript",
  "React Hooks",
  "DiscordJS",
];

const About = () => {
  return (
    <div className="md:max-w-2xl lg:max-w-7xl h-full px-2 md:px-0  grow flex-shrink-0 gap-4 flex flex-col gap-y-8 w-full items-start  bg-white py-24">
      <Image src={NextJS} alt={"nextjs"} />
      <p className="text-violet-600 text-4xl font-bold">Fanvercel 🤙</p>

      {about.map((f, e) => {
        return (
          <div key={e}>
            <p className="text-xl font-bold">{f.title}</p>
            {f.image ? (
              <Image
                src={f.image}
                alt={f.title}
                width={500}
                height={500}
                className={"w-auto h-64"}
              />
            ) : null}
            <p>{f.description}</p>
          </div>
        );
      })}

      <p className="text-violet-600 text-4xl font-bold py-8">Ref</p>
      <div className="flex flex-row items-center flex-wrap w-full gap-2">
        {ref.map((f, t) => {
          return (
            <p
              key={t}
              className="bg-violet-500  text-white p-2 rounded-full font-bold "
            >
              {f}
            </p>
          );
        })}
      </div>
    </div>
  );
};

About.layout = Layout;
export default About;
