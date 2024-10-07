import { Link } from "react-router-dom";
import { Price } from "../../introducing/Link";
import { LinkDownload, LinkSupport } from "../../Img_Link";

const AppCosts = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          APP COSTS
        </h2>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          How much does it cost to download Nutrify?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify can be downloaded from the{" "}
          <Link to={LinkDownload} className="text-blue-600 underline">
            Apple App Store.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          However, Nutrify offers subscription-based access to premium features
          at USD 3.99/month (inc GST) or USD 24.99/year (inc GST). Please note
          these are base prices and may be subject to{" "}
          <Link to={Price} className="text-blue-600 underline">
            {" "}
            Apple's App Store price adjustments based on region.
          </Link>{" "}
          So the price you see in the App Store/inside the Nutrify app may be
          slightly different to what is listed here.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Monthly or yearly subscription fees are to be paid through Apple’s App
          Store payments.
        </p>

        {/* -------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Does Nutrify offer a free trial?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify may, at its discretion, offer a free trial for a limited
          period of time.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          At the end of the free trial period, your payment method as provided
          by the Apple App Store will be charged unless you cancel your
          subscription within the trial period.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify reserve the right to modify the terms and conditions of the
          free trial or cancel a free trial offer at any time and without
          notice.
        </p>

        {/* ------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Where can I find the subscription fees?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          The subscription fees are displayed on Nutrify.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We endeavour to maintain accurate information on our App, but from
          time to time there may be an error. If the subscription price is more
          or less than the price displayed, we reserve the right to correct the
          error.
        </p>

        {/* ---------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Who can I talk to about my subscription?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          If you have any questions regarding your subscription or the App,
          please contact us at{" "}
          <Link to={LinkSupport} className="text-blue-600 underline">
            support@karyalokal-studio.com
          </Link>{" "}
          or through our website{" "}
          <Link to="/" className="text-blue-600 underline">
            {" "}
            foodtracker.karyalokal-studio.com.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify and Craizy Studios are not involved in the processing any
          payments made to use the App. Please refer to the legal disclaimers
          provided by the Apple App Store for any questions about how payment is
          processed.
        </p>

        {/* ---------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Can I cancel or modify my subscription?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          You acknowledge that Nutrify’s cancellation policy is consistent with
          Apple’s App Store purchases cancellation policy. Those terms will also
          govern your use of the App.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Should you wish to change or cancel your subscription after your
          payment has been processed, click{" "}
          <Link
            to="https://support.apple.com/en-au/118428"
            className="text-blue-600 underline"
          >
            here {""}
          </Link>
          for instructions.
        </p>

        {/* --------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do I request a refund?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify’s refund policy are in line with Apple’s App Store purchases.
          You acknowledge that Apple’s App Store’s refund policy also governs
          your use of the App
        </p>
        <p className="mt-[1em] mb-[1em] block">
          To request for a refund, click{" "}
          <Link
            to="https://support.apple.com/en-au/118223"
            className="text-blue-600 underline"
          >
            here{" "}
          </Link>
          for instructions.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Our goods and services come with guarantees that cannot be excluded
          under the Australian Consumer Law. For major failures with the
          service, you are entitled:
        </p>
        <ol className="list-decimal pl-6 space-y-[1px]">
          <li className="pl-6">to cancel your service contract with us; and</li>
          <li className="mt-[1em] mb-[1em] pl-6">
            to a refund for the unused portion, or to compensation for its
            reduced value.
          </li>
        </ol>
        <p className="mt-[1em] mb-[1em] block">
          If a failure with the goods or a service does not amount to a major
          failure, you are entitled to have the failure rectified in a
          reasonable time. If this is not done, you are entitled to a refund for
          the goods and to cancel the contract for the service and obtain a
          refund of any unused portion.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You are also entitled to be compensated for any other reasonably
          foreseeable loss or damage from a failure in the goods or service.
        </p>
      </section>
    </>
  );
};

export default AppCosts;
