import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkSupport } from "../../Img_Link";

const PrivacyPolicy = () => {
    useEffect(() => {
      const hash = window.location.hash;
      if (hash === "#privacy-policy") {
        const privacySection = document.getElementById("privacy-policy");
        if (privacySection) {
          privacySection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, []);
  return (
    <>
      <section className="mb-[1em]">
        <h2
          id="privacy-policy"
          className="font-black text-[1.5em] mb-[4px] font-helvetica block"
        >
          PRIVACY POLICY
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Craizy Studios respects your right to privacy and is committed to
          safeguarding the privacy of our customers and website visitors. We
          comply with the Australian Privacy Principles contained in the Privacy
          Act 1988 (Cth).Our commitment to privacy extends across all regions
          where our services are available. This policy sets out how we collect
          and treat your personal information.
        </p>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          What personal information do we collect?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Craizy Studios will, from time to time, receive and store personal
          information you enter onto our website, provided to us directly or
          given to us in other forms.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You may provide basic information such as your name, email address and
          log in details to enable us to send information, provide updates,
          process your subscription and for you to enjoy and use Nutrify.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          As Nutrify is a photo-based food education App, you may provide images
          to us, which play a fundamental role in fulfilling the App's core
          purpose and enhancing the computer vision models powering it.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Additionally, we may also collect other personal information you
          provide while interacting with us.
        </p>

        {/* --------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do we collect your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We collect personal information from you in a variety of ways,
          including when you interact with us electronically and when you access
          Nutrify and our website. We only collect personal information that you
          provide to us directly.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may collect additional information at other times, including but
          not limited to, when you provide feedback, when you provide
          information about your personal or business affairs, change your email
          preferences, respond to surveys and/or promotions, or communicate with
          us.
        </p>

        {/* ---------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do we use your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We may use personal information collected from you to provide you with
          information, updates, products, and services. We may also make you
          aware of new and additional products, services, and opportunities
          available to you. We may use your personal information to improve our
          services and better understand your needs.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may also use your personal information to contact you about our
          products and services, including for marketing purposes. You can opt
          out of receiving marketing material at any time.
        </p>

        {/* ----------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do we disclose your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We do not and will not sell or deal in personal information or any
          customer information.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may disclose your personal information to any of our employees,
          officers, insurers, professional advisers, agents, suppliers, or
          subcontractors. We will only do this to the extent it is reasonably
          necessary to provide our products or services to you.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may from time to time need to disclose personal information to
          comply with our legal obligations.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We may, however, use and disclose images you have submitted through
          Nutrify. It is important to note that only images of food should be
          submitted through the App or our website. You must refrain from
          providing images containing personal, private, or sensitive
          information. While we are constantly improving our systems to ensure
          that any images containing personal or private information that are
          inadvertently submitted are flagged and handled with the utmost care
          and discretion, you acknowledge and agree that Craizy Studios bears no
          responsibility for any images you choose to submit.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You acknowledge and agree that by capturing images of food using
          Nutrify, you grant us an unrestricted, worldwide license to use,
          distribute, display, and share these images. This includes, but is not
          limited to, the use of these images for training computer vision and
          other machine learning models to enhance the App’s services, sharing
          images as part of an open-source database, and incorporating images
          into Nutrify’s documentation and reference materials. Please be aware
          that Nutrify is solely interested in images of food. We do not seek or
          use images containing people, faces, or items unrelated to food.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Any personal data contained within the photographs provided to Nutrify
          will be removed prior to any usage as described above. We may also use
          your personal information to protect the copyright, trademarks, legal
          rights, property, or safety of Craizy Studios, Nutrify,
          <Link to="/" className="text-blue-600 underline">
            foodtracker.karyalokal-studio.com.
          </Link>
          , our customers or third parties.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Information that we collect may from time to time be stored, processed
          in, or transferred between parties located in countries outside of
          Australia.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If there is a change of control in our business or a sale or transfer
          of business assets, we reserve the right to transfer (to the extent we
          are legally able to) our user databases, together with any personal
          information and non-personal information contained in those databases.
          This information may be disclosed to a potential purchaser under an
          agreement to maintain confidentiality. We would seek to only disclose
          information in good faith and where required by any of the above
          circumstances.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          By providing us with personal information, you consent to the terms of
          this privacy policy and the types of disclosure covered by this
          Policy. Where we disclose your personal information to third parties,
          we will request that the third party follow this Policy regarding
          handling your personal information.
        </p>

        {/* ------------------------------------------------------------------ */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How do we secure your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          We are committed to ensuring that the information you provide to us is
          secure. In order to prevent unauthorised access or disclosure, we have
          put in place suitable physical, electronic, and managerial procedures
          to safeguard and secure information and protect it from misuse,
          interference, loss and unauthorised access, modification, and
          disclosure.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          The transmission and exchange of information is carried out at your
          own risk. We cannot guarantee the security of any information that you
          transmit to or receive from us.
        </p>

        {/* ------------------------------------------------------------------ */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          How can you access your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          You may request details of personal information that we hold about you
          by emailing us at{" "}
          <Link to={LinkSupport} className="text-blue-600 underline">
            {" "}
            support@karyalokal-studio.com.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We reserve the right to refuse to provide you with information that we
          hold about you, in certain circumstances set out in the Privacy Act.
        </p>

        {/* ------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          What rights do you have in relation to your personal information?
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          You have the right to access your personal information and require us
          to correct any of your personal information.
        </p>

        {/* -------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          Changes to privacy policy
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Please be aware that we may make changes to our privacy policy in the
          future. Please check back from time to time to review our privacy
          policy.
        </p>

        {/* -------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">Cookies and Pixels</h3>
        <p className="mt-[1em] mb-[1em] block">
          A cookie is a small file placed in your web browser that collects
          information about your web browsing history. Use of cookies allows a
          website to tailor its configuration to your needs and preferences.
          Cookies do not access information stored on your computer or any
          personal information (for example: name, address, email address or
          telephone number). Most web browsers automatically accept cookies, but
          you can choose to reject cookies by changing your browser settings.
          This may, however, prevent you from taking full advantage of our App
          and website.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Our App and website may use cookies to analyse website traffic,
          provide social media sharing and liking functionality and help us
          provide a better user experience for visitors to our website. In
          addition, cookies and pixels may be used to serve relevant ads to
          website visitors through third party services such as Google Adwords
          and Facebook Adverts. These ads may appear on this website or other
          websites you visit.
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
