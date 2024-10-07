import Contact from "./_component/Contact";
import Faq from "./_component/Faq";
import Features from "./_component/Features";
import LongerVersion from "./_component/LongerVersion";
import Pricing from "./_component/Pricing";
import ShortVersion from "./_component/ShortVersion";
import Version from "./_component/Version";
import Who from "./_component/Who";
import Work from "./_component/Work";

const IntroducingPage = () => {
    return (
      <div className="max-w-[750px] w-[100%] mx-auto my-auto leading-tight">
        <div className="text-left p-5 flex flex-col justify-center items-center h-auto">
          <ShortVersion />
          <LongerVersion />
          <Who />
          <Features />
          <Work />
          <Pricing />
          <Version />
          <Contact />
          <Faq />
        </div>
      </div>
    );
};

export default IntroducingPage;
