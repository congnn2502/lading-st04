import Intro from "./_component/Intro";
import LongerVersion from "./_component/LongerVersion/LongerVersion";
import ShortVersion from "./_component/ShortVersion";

const IntroducingNewPage = () => {
  return (
    <div className="max-w-[750px] w-[100%] mx-auto my-auto leading-tight">
      <div className="text-left p-5 flex flex-col justify-center items-center h-auto">
        <Intro />
        <ShortVersion />
        <LongerVersion />
      </div>
    </div>
  );
};

export default IntroducingNewPage;
