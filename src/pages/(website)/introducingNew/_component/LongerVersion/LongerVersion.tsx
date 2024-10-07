import AnalysisPremium from "./_component/AnalysisPremium";
import Feedback from "./_component/Feedback";
import Free from "./_component/Free";
import TargetPremium from "./_component/TargetPremium";

const LongerVersion = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Longer Version
        </h2>
        <TargetPremium />
        <AnalysisPremium />
        <Free />
        <Feedback/>
      </section>
    </>
  );
};

export default LongerVersion;
