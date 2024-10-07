import { Link } from "react-router-dom";
import { LinkDownload } from "../../Img_Link";

const Accounts = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          REGISTRATION AND ACCOUNTS
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify can be downloaded from the
          <Link to={LinkDownload} className="text-blue-600 underline">
            {" "}
            Apple App Store.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          To use certain features of Nutrify, you may be required to create an
          account. You agree to provide accurate, current, and complete
          information during the registration process..
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You are responsible for maintaining the security of your account and
          password.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You may not share your account with others, and you agree not to sell
          or transfer your account to another party.
        </p>

        {/* -------------------------------------------------------------- */}
        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do I get notified of the changes in the App?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Please be aware that we may make changes to our App in the future. Any
          information about the changes will be available through Nutrify
          notifications and App updates, by email (if you have subscribed), and
          our website at{" "}
          <Link to="/" className="text-blue-600 underline">
            foodtracker.karyalokal-studio.com.
          </Link>
        </p>
        {/* ------------------------------------------------------------------- */}
        <h3 className="text-[1.17em] my-[1em] font-bold">App Accuracy</h3>
        <p className="mt-[1em] mb-[1em] block">
          The results and information provided by Nutrify may not always be
          entirely accurate, as they are generated using computer vision and
          machine learning technology.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          The accuracy of Nutrify’s assessments and recommendations can be
          influenced by factors such as the quality of input data and the
          inherent limitations of these technologies.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          It is essential for you to exercise your own discretion and not rely
          solely on Nutrify’s results for making critical decisions, especially
          in determining whether something is edible or not. When it comes to
          matters like dietary choices or health-related decisions, we advise
          you to consult with qualified professionals or trusted sources to
          ensure the most accurate and reliable information.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Please be aware that Craizy Studios and our third parties do not
          assume responsibility for any action or inaction taken based on the
          App's results. Nutrify is intended for informational purposes and
          should not replace expert advice or common sense.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Information provided by Nutrify is collated from reputable third-party
          sources. You acknowledge that the information provided belongs to
          third parties and that Craizy Studios will not assume any
          responsibility for their accuracy or validity in any way. Where
          possible, Nutrify will provide reference information to support
          materials. You acknowledge that the information or support materials
          are not the responsibility of Nutrify and may change without notice.
        </p>
      </section>
    </>
  );
};

export default Accounts;
