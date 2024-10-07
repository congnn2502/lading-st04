import { Link } from "react-router-dom";
import { Logo } from "../../Img_Link";

const Intro = () => {
  return (
    <>
      <section className="mb-[1em]">
        <Link to="/">
          <img
            className="max-w-[200px] w-[100%] mx-auto block"
            src={Logo}
            alt=""
          />
        </Link>
        <h1 className="font-black text-[2em] mt-[0.67em] font-helvetica block">
          TERMS AND CONDITIONS
        </h1>
        <p className="mt-[1em] mb-[1em] block">
          <b>Last updated:</b> 21 February 2024
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify: The Food App (‘<b>Nutrify</b>’ or ‘<b>App</b>’) belongs to
          Craizy Pty Ltd trading as Craizy Studios (ABN 32 672 081 604) (‘
          <b>Craizy Studios</b>’, ‘<b>we</b>’, ‘<b>our</b>’ or ‘<b>us</b>’).
        </p>
        <p className="mt-[1em] mb-[1em] block">This page sets out:</p>
        <ol className="list-decimal pl-6 space-y-[1px]">
          <li className="pl-6">information about registration and accounts;</li>
          <li className="mt-[1em] mb-[1em] pl-6">
            the costs of the App, App subscription, cancellation, and our refund
            policy;
          </li>
          <li className="mt-[1em] mb-[1em] pl-6">our privacy policy; and</li>
          <li className="mt-[1em] mb-[1em] pl-6">our website terms of use.</li>
        </ol>

        <p className="mt-[1em] mb-[1em] block">
          If you access and use Nutrify, you are taken to have agreed to these
          terms and conditions. If you have any questions, please contact us on
          support@karyalokal-studio.com.
        </p>
      </section>
    </>
  );
};

export default Intro;
