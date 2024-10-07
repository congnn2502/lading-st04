import Accounts from "./_component/Accounts";
import AppCosts from "./_component/AppCosts";
import Intro from "./_component/Intro";
import PrivacyPolicy from "./_component/PrivacyPolicy";
import UseWebsite from "./_component/UseWebsite";

const Terms = () => {
  return (
    <div className="max-w-[750px] w-[100%] mx-auto my-auto leading-tight">
      <div className="text-left p-5 flex flex-col justify-center items-center h-auto">
              <Intro />
              <Accounts />
              <AppCosts />
              <PrivacyPolicy />
              <UseWebsite/>
      </div>
    </div>
  );
};

export default Terms;
