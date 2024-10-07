import { Link } from "react-router-dom";
import { LinkSupport } from "../../Img_Link";

const UseWebsite = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          WEBSITE TERMS OF USE
        </h2>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          Intellectual Property Rights
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Our website
          <Link to="/" className="text-blue-600 underline">
            {" "}
            foodtracker.karyalokal-studio.com.
          </Link>{" "}
          contains intellectual property (including copyright) owned by Craizy
          Pty Ltd trading as Craizy Studios and third parties
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We and our third parties retain all rights, title and interest in our
          website and all related content. Nothing you do on or in relation to
          the website will transfer to you:
        </p>
        <ol className="list-decimal pl-6 space-y-[1px]">
          <li className="pl-6">
            the business name, trading name, domain name, trademark, industrial
            design, patent, registered design, or copyright; or
          </li>
          <li className="mt-[1em] mb-[1em] pl-6">
            the right to use or exploit a business name, trading name, domain
            name, trademark, or industrial design; or
          </li>
          <li className="mt-[1em] mb-[1em] pl-6">
            a system or process that is the subject of a patent, or copyright
            (or an adaptation or modification of such a system or process),
          </li>
        </ol>
        <p className="mt-[1em] mb-[1em] block">
          of Craizy Pty Ltd and any third party
        </p>

        {/* ---------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          General information
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          When you come to our website
          <Link to="/" className="text-blue-600 underline">
            foodtracker.karyalokal-studio.com.
          </Link>{" "}
          we may collect certain information such as browser type, operating
          system, websites visited immediately before coming to our site, etc.
          This information is used in an aggregated manner to analyse how people
          use our site, such that we can improve our service.
        </p>

        {/* ------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Links to Third Party Websites
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Our website may contain links to other websites. These links are meant
          for your convenience only. Links to third party websites do not
          constitute sponsorship or endorsement or approval of these websites.
          Please be aware that we are not responsible for the privacy practices
          of such other websites. We encourage our users to be aware, when they
          leave our website, to read the privacy statements of each and every
          website that collects personally identifiable information. This
          privacy policy applies solely to information collected by this
          website.
        </p>

        {/* ------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Content and product descriptions
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We do not warrant that product descriptions or other content of this
          website is accurate, complete, reliable, current, or error-free.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may update any content on our website at any time without notice.
        </p>

        {/* ------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Reviews and comments
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          When visiting our website or social media pages, and subject to your
          compliance with these terms, you may post reviews and comments.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If your reviews or comments contain defamatory, misleading, or false
          statements or is threatening, aggressive or contains obscenities, or
          is otherwise contrary to the relevant social media platform’s content
          or other rules, we may remove your reviews and comments and remove
          your access to our website and social media pages.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We reserve the right to remove or edit any content that you post on
          our website. You acknowledge that any content posted by you on our
          website or social media pages becomes our property. For this purpose,
          you grant us a non-exclusive, royalty-free, perpetual, irrevocable,
          and fully sublicensable right to use, distribute and display such
          content in any way we see fit, throughout the world and in any media.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You agree to indemnify us for all claims made against us resulting
          from your reviews or comments on our website or social media pages.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You acknowledge that we are not the author of any reviews or comments
          on our website or social media pages and that we are not responsible
          and do not assume any liability for any content posted by you or any
          third party.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If you are concerned about any reviews or comments, please contact us
          at
          <Link to={LinkSupport} className="text-blue-600 underline">
            support@karyalokal-studio.com.
          </Link>
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Customer account security
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          For security purposes, you must not share your customer Account login
          details.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If you use this site, you are responsible for maintaining the
          confidentiality of your customer account and password and for
          restricting access to your computer, and you agree to accept
          responsibility for all activities that occur under your customer
          account or password.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We can terminate your customer account at any time and in our sole
          discretion.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If a customer is under 18 years of age and purchasing an item with a
          credit card, we will require the consent of a parent or guardian at
          the time of purchase.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Credit card information
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We do not store any credit card information that you provide. If
          payments are made via our App, they are securely managed by the Apple
          App Store in compliance with relevant standards.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Suspending or terminating site access
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We may suspend or terminate your access to and use of our website,
          without notice, if you are in breach of these terms.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">Viruses</h3>
        <p className="mt-[1em] mb-[1em] block">
          We make every attempt to ensure that the website is free of viruses
          and other malicious code which may affect your computer systems.
          However, your access to and use of the website and App are at your own
          risk, and you must take your own precautions to avoid and protect your
          computer systems against any viruses and other malicious code.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">Cyber security</h3>
        <p className="mt-[1em] mb-[1em] block">
          If, due to events beyond our reasonable control, you incur any loss or
          damage arising from a cyber security event in relation to our website,
          email communications, payment gateway providers or products, you
          acknowledge that we are not liable.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You must take appropriate steps to ensure that any requests for
          payment purporting to be from Craizy Studios are genuine, including by
          calling or emailing us to request confirmation.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">Contact us</h3>
        <p className="mt-[1em] mb-[1em] block">
          If you have any questions or concerns regarding our information about
          registration and accounts, App costs, subscription, our cancellation
          and refund policy, privacy policy or website terms and conditions,
          please contact us at
          <Link to={LinkSupport} className="text-blue-600 underline">
            support@foodtracker.app
          </Link>{" "}
          and we will endeavour to respond within 48 hours.
        </p>

        {/* ----------------------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How can I make a complaint?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          If you wish to make a complaint, please submit details of your
          complaint to{" "}
          <Link to={LinkSupport} className="text-blue-600 underline">
            support@foodtracker.app.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We will investigate and respond as soon as possible after receiving
          written notice of your complaint.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If your complaint relates to any payment, please note that Nutrify is
          unable to assist. All such enquiries should be directed to the Apple
          App Store.
        </p>
      </section>
    </>
  );
};

export default UseWebsite;
