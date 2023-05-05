import Layout from "../components/layout";
import Screen from "../components/arch/screen";

const Settings = [
  {
    title: "from: Vercel",
    message:
      "You have unlocked you CTO Role, congratulation dude. Im so proud of you!",
  },
  {
    title: "from: Carolina",
    message: "You have unlocked you CEO Role",
  },
  {
    title: "from: Lisa",
    message:
      "Your plan is being fullstack mobile developer, and only typescript and golang can make you happy",
  },
];

const Mail = () => {
  return (
    <div className="flex flex-col justify-center py-20 md:py-24 h-full">
      <Screen>
        <div className="w-full h-full flex flex-col md:flex-col lg:flex-col items-stretch grow flex-shrink-0 gap-4">
          <p className="text-4xl font-bold p-4 md:p-0">Mail</p>
          <div className="hidden md:hidden lg:flex w-96 h-fit justify-center items-center text-4xl font-bold">
            All your email will be return here dude
          </div>
          <div className="w-full md:w-full lg:w-2/4 flex flex-col md:gap-y-2">
            {Settings.map((a, i) => {
              return (
                <div
                  key={i}
                  className="w-full border border-gray-300 md:rounded-md flex flex-col text-gray-600 items-start text-base justify-center h-fit px-2 py-4"
                >
                  <div className="pb-2 flex flex-col items-start">
                    <p className="text-base font-bold">{a.title}</p>
                    <p className="text-xs">{a.message}</p>
                  </div>
                  <button className="buttonEffect text-xs text-blue-500 px-2 py-0.5 bg-blue-500/20 rounded-full">
                    open mail
                  </button>
                  {/* <ArrowStore /> */}
                </div>
              );
            })}
          </div>
        </div>
      </Screen>
    </div>
  );
};

Mail.layout = Layout;
export default Mail;
