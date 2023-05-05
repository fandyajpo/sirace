import Layout from "../components/layout";
import Screen from "../components/arch/screen";
import Message from "../components/feedLayout/message";
import Story from "../components/feedLayout/story";
import Poster from "../components/feedLayout/poster";
import Activity from "../components/feedLayout/activity";

const Feed = () => {
  return (
    <div className="flex flex-col justify-center pt-14 pb-24 md:py-24">
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col md:flex-col lg:flex-col items-stretch grow flex-shrink-0">
          <Story />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col md:flex-col lg:flex-row items-stretch grow flex-shrink-0 gap-x-4">
          <Activity />
          <Poster />
          <Message />
        </div>
      </Screen>
    </div>
  );
};

Feed.layout = Layout;
export default Feed;
